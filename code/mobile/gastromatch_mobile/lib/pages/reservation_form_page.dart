import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'package:shared_preferences/shared_preferences.dart';
import 'dart:convert';

class ReservationFormPage extends StatefulWidget {
  final int chefId;
  final String chefName;

  ReservationFormPage({required this.chefId, required this.chefName});

  @override
  _ReservationFormPageState createState() => _ReservationFormPageState();
}

class _ReservationFormPageState extends State<ReservationFormPage> {
  DateTime? selectedDate;
  TimeOfDay? selectedTime;
  bool isLoading = false;
  String? errorMessage;
  String? successMessage;

  final _formKey = GlobalKey<FormState>();
  final _nameController = TextEditingController();
  final _cpfController = TextEditingController();
  final _emailController = TextEditingController();
  final _phoneController = TextEditingController();
  final _locationController = TextEditingController();
  final _guestsController = TextEditingController();
  final _mealTypeController = TextEditingController();
  final _descriptionController = TextEditingController();
  final _restrictionsController = TextEditingController();
  final _notesController = TextEditingController();

  Future<void> _selectDate() async {
    final picked = await showDatePicker(
      context: context,
      initialDate: DateTime.now().add(Duration(days: 1)),
      firstDate: DateTime.now(),
      lastDate: DateTime(2101),
    );
    if (picked != null) setState(() => selectedDate = picked);
  }

  Future<void> _selectTime() async {
    final picked = await showTimePicker(
      context: context,
      initialTime: TimeOfDay.now(),
    );
    if (picked != null) setState(() => selectedTime = picked);
  }

  Future<void> _submitReservation() async {
    if (!_formKey.currentState!.validate() ||
        selectedDate == null ||
        selectedTime == null) {
      setState(() => errorMessage = 'Preencha todos os campos obrigatórios');
      return;
    }

    setState(() {
      isLoading = true;
      errorMessage = null;
      successMessage = null;
    });

    final prefs = await SharedPreferences.getInstance();
    final userId = prefs.getInt('user_id');
    final token = prefs.getString('auth_token');

    if (userId == null || token == null) {
      setState(() {
        errorMessage = 'Você precisa se autenticar primeiro!';
        isLoading = false;
      });
      return;
    }

    final dateStr =
        '${selectedDate!.toIso8601String().split('T')[0]} ${selectedTime!.hour.toString().padLeft(2, '0')}:${selectedTime!.minute.toString().padLeft(2, '0')}';

    final response = await http.post(
      Uri.parse('http://10.0.2.2:8080/api/reservations'),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer $token',
      },
      body: jsonEncode({
        'customer_name': _nameController.text,
        'customer_cpf': _cpfController.text,
        'customer_email': _emailController.text,
        'phone': _phoneController.text,
        'location': _locationController.text,
        'guests': int.parse(_guestsController.text),
        'mealType': _mealTypeController.text,
        'description': _descriptionController.text,
        'dietary_restrictions': _restrictionsController.text,
        'notes': _notesController.text,
        'user': userId,
        'chef': widget.chefId,
        'date': dateStr,
      }),
    );

    setState(() => isLoading = false);

    if (response.statusCode == 201) {
      setState(() {
        successMessage = 'Reserva criada com sucesso!';
      });

      await Future.delayed(Duration(seconds: 1));
      Navigator.of(context).popUntil((route) => route.isFirst);
    } else {
      final error = jsonDecode(response.body);
      setState(() {
        errorMessage = error['message'] ?? 'Erro ao criar reserva';
      });
    }
  }

  @override
  void dispose() {
    _nameController.dispose();
    _cpfController.dispose();
    _emailController.dispose();
    _phoneController.dispose();
    _locationController.dispose();
    _guestsController.dispose();
    _mealTypeController.dispose();
    _descriptionController.dispose();
    _restrictionsController.dispose();
    _notesController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Reservar com ${widget.chefName}')),
      body: SingleChildScrollView(
        padding: EdgeInsets.all(16),
        child: Form(
          key: _formKey,
          child: Column(
            children: [
              if (errorMessage != null)
                Text(errorMessage!, style: TextStyle(color: Colors.red)),
              if (successMessage != null)
                Text(successMessage!, style: TextStyle(color: Colors.green)),
              SizedBox(height: 10),
              TextFormField(
                controller: _nameController,
                decoration: InputDecoration(labelText: 'Nome completo'),
                validator: (v) => v!.isEmpty ? 'Campo obrigatório' : null,
              ),
              TextFormField(
                controller: _cpfController,
                decoration: InputDecoration(labelText: 'CPF'),
                validator: (v) => v!.isEmpty ? 'Campo obrigatório' : null,
              ),
              TextFormField(
                controller: _emailController,
                decoration: InputDecoration(labelText: 'Email'),
                validator: (v) => v!.isEmpty ? 'Campo obrigatório' : null,
              ),
              TextFormField(
                controller: _phoneController,
                decoration: InputDecoration(labelText: 'Telefone'),
                validator: (v) => v!.isEmpty ? 'Campo obrigatório' : null,
              ),
              TextFormField(
                controller: _locationController,
                decoration: InputDecoration(labelText: 'Endereço do evento'),
                validator: (v) => v!.isEmpty ? 'Campo obrigatório' : null,
              ),
              TextFormField(
                controller: _guestsController,
                decoration: InputDecoration(labelText: 'Número de convidados'),
                keyboardType: TextInputType.number,
                validator: (v) => v!.isEmpty ? 'Campo obrigatório' : null,
              ),
              TextFormField(
                controller: _mealTypeController,
                decoration: InputDecoration(labelText: 'Tipo de refeição'),
                validator: (v) => v!.isEmpty ? 'Campo obrigatório' : null,
              ),
              TextFormField(
                controller: _descriptionController,
                decoration: InputDecoration(labelText: 'Descrição do evento'),
                validator: (v) => v!.isEmpty ? 'Campo obrigatório' : null,
              ),
              TextFormField(
                controller: _restrictionsController,
                decoration: InputDecoration(
                  labelText: 'Restrições alimentares (opcional)',
                ),
              ),
              TextFormField(
                controller: _notesController,
                decoration: InputDecoration(
                  labelText: 'Observações (opcional)',
                ),
              ),
              SizedBox(height: 16),
              ListTile(
                title: Text(
                  selectedDate == null
                      ? 'Selecionar Data'
                      : 'Data: ${selectedDate!.toLocal().toString().split(' ')[0]}',
                ),
                trailing: Icon(Icons.calendar_today),
                onTap: _selectDate,
              ),
              ListTile(
                title: Text(
                  selectedTime == null
                      ? 'Selecionar Horário'
                      : 'Horário: ${selectedTime!.format(context)}',
                ),
                trailing: Icon(Icons.access_time),
                onTap: _selectTime,
              ),
              SizedBox(height: 20),
              isLoading
                  ? CircularProgressIndicator()
                  : ElevatedButton(
                    onPressed: _submitReservation,
                    child: Text('Confirmar Reserva'),
                    style: ElevatedButton.styleFrom(
                      backgroundColor: Colors.orange,
                      foregroundColor: Colors.white,
                      padding: EdgeInsets.symmetric(
                        horizontal: 40,
                        vertical: 12,
                      ),
                    ),
                  ),
            ],
          ),
        ),
      ),
    );
  }
}
