import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'package:flutter/services.dart';

import 'LoginPage.dart';
import '../input.dart';

class RegisterChefPage extends StatefulWidget {
  final String userId;

  const RegisterChefPage({required this.userId, Key? key}) : super(key: key);

  @override
  State<RegisterChefPage> createState() => _RegisterChefPageState();
}


class _RegisterChefPageState extends State<RegisterChefPage> {
  final TextEditingController _specializationController = TextEditingController();
  final TextEditingController _experienceController = TextEditingController();
  final TextEditingController _priceController = TextEditingController();
  final TextEditingController _portfolioController = TextEditingController();
  final TextEditingController _descriptionController = TextEditingController();

  String _selectedAvailability = 'Selecione';
  bool _isLoading = false;
  String? _error;

  double parseCurrencyPtBr(String text) {
    final numericOnly = text.replaceAll(RegExp(r'[^\d]'), '');
    if (numericOnly.isEmpty) return 0.0;

    return double.parse(numericOnly) / 100;
  }


  Future<void> registerChef() async {
    setState(() {
      _isLoading = true;
      _error = null;
    });

    try {
      final response = await http.post(
        Uri.parse('http://10.0.2.2:8080/api/chefs/'),
        headers: {
          'Content-Type': 'application/json',
        },
        body: jsonEncode({
          'user_id': int.parse(widget.userId),
          'specialization': _specializationController.text,
          'experience': int.tryParse(_experienceController.text),
          'price_per_hour': parseCurrencyPtBr(_priceController.text),
          'availability': _selectedAvailability,
          'portfolio': _portfolioController.text.isEmpty ? null : _portfolioController.text,
          'professional_description': _descriptionController.text,
        }),
      );

      if (response.statusCode == 200 || response.statusCode == 201) {
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(content: Text("Chef cadastrado com sucesso!"), backgroundColor: Colors.green),
        );
        Navigator.pushReplacement(
          context,
          MaterialPageRoute(builder: (context) => LoginPage()),
        );
      } else {
        setState(() {
          _error = 'Erro: ${response.body}';
        });
      }
    } catch (e) {
      setState(() {
        _error = 'Erro ao conectar com o servidor.';
      });
    } finally {
      setState(() {
        _isLoading = false;
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Cadastro do Chef')),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: SingleChildScrollView(
          child: Column(
            children: [
              if (_error != null) Text(_error!, style: TextStyle(color: Colors.red)),
              SizedBox(height: 16),
              CustomInputField(
                controller: _specializationController,
                hintText: "Especialização",
              ),
              SizedBox(height: 16),
              CustomInputField(
                controller: _experienceController,
                keyboardType: TextInputType.number,
                hintText: "Anos de Experiência",
                inputFormatters: [FilteringTextInputFormatter.digitsOnly],
              ),
              SizedBox(height: 16),
              CustomInputField(
                controller: _priceController,
                keyboardType: TextInputType.numberWithOptions(decimal: true),
                hintText: "Preço por Hora",
                inputFormatters: [
                  MoneyInputFormatterPtBr(maxValue: 9999.99),
                ],
              ),

              SizedBox(height: 16),
              CustomSelectionField(
                value: _selectedAvailability,
                items: [
                  'Todos os dias',
                  'Segunda a Sexta',
                  'Segunda a Sábado',
                  'Finais de semana',
                  'Fins de Semana e Feriados',
                  'A Combinar',
                ],
                hintText: 'Disponibilidade',
                onChanged: (val) {
                  setState(() {
                    _selectedAvailability = val!;
                  });
                },
              ),
              SizedBox(height: 16),
              CustomInputField(
                controller: _portfolioController,
                hintText: "Link do Portfólio (opcional)",
                keyboardType: TextInputType.url,
              ),
              SizedBox(height: 16),
              CustomInputField(
                controller: _descriptionController,
                hintText: "Descrição Profissional",
                keyboardType: TextInputType.multiline,
                maxLines: 5,
                minLines: 3,
              ),
              SizedBox(height: 24),
              _isLoading
                  ? CircularProgressIndicator(color: Colors.orange)
                  : ElevatedButton(
                onPressed: registerChef,
                style: ElevatedButton.styleFrom(
                  backgroundColor: Colors.orange,
                  foregroundColor: Colors.white,
                  shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(16),
                  ),
                  padding: EdgeInsets.symmetric(horizontal: 24, vertical: 12),
                ),
                child: Text('Cadastrar Chef'),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
