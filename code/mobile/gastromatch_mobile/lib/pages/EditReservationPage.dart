import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'package:shared_preferences/shared_preferences.dart';
import 'package:intl/intl.dart';
import 'dart:convert';

class EditReservationPage extends StatefulWidget {
  final Map<String, dynamic> reservation;

  EditReservationPage({required this.reservation});

  @override
  _EditReservationPageState createState() => _EditReservationPageState();
}

class _EditReservationPageState extends State<EditReservationPage> {
  late TextEditingController _descriptionController;
  late TextEditingController _locationController;
  late TextEditingController _guestsController;

  DateTime? selectedDate;
  TimeOfDay? selectedTime;
  bool isLoading = false;

  @override
  void initState() {
    super.initState();
    _descriptionController =
        TextEditingController(text: widget.reservation['description']);
    _locationController =
        TextEditingController(text: widget.reservation['location']);
    _guestsController =
        TextEditingController(text: widget.reservation['guests'].toString());

    // Inicializa data e hora da reserva
    selectedDate = DateTime.tryParse(widget.reservation['date']);
    selectedTime = selectedDate != null
        ? TimeOfDay.fromDateTime(selectedDate!)
        : TimeOfDay.now();
  }

  Future<void> _selectDate() async {
    final picked = await showDatePicker(
      context: context,
      initialDate: selectedDate ?? DateTime.now(),
      firstDate: DateTime.now(),
      lastDate: DateTime(2101),
    );
    if (picked != null) setState(() => selectedDate = picked);
  }

  Future<void> _selectTime() async {
    final picked = await showTimePicker(
      context: context,
      initialTime: selectedTime ?? TimeOfDay.now(),
    );
    if (picked != null) setState(() => selectedTime = picked);
  }

  String _formattedDateTime() {
    if (selectedDate == null || selectedTime == null) return 'Selecione data e hora';
    final dt = DateTime(
      selectedDate!.year,
      selectedDate!.month,
      selectedDate!.day,
      selectedTime!.hour,
      selectedTime!.minute,
    );
    return DateFormat('dd/MM/yyyy HH:mm').format(dt);
  }

  Future<void> updateReservation() async {
    final prefs = await SharedPreferences.getInstance();
    final token = prefs.getString('auth_token');

    if (selectedDate == null || selectedTime == null) {
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text('Por favor, selecione a data e hora')),
      );
      return;
    }

    final fullDate = DateTime(
      selectedDate!.year,
      selectedDate!.month,
      selectedDate!.day,
      selectedTime!.hour,
      selectedTime!.minute,
    );

    final body = {
      'description': _descriptionController.text,
      'location': _locationController.text,
      'guests': int.parse(_guestsController.text),
      'date': fullDate.toIso8601String(),
    };

    final response = await http.patch(
      Uri.parse('http://10.0.2.2:8080/api/reservations/${widget.reservation['id']}'),
      headers: {
        'Authorization': 'Bearer $token',
        'Content-Type': 'application/json',
      },
      body: jsonEncode(body),
    );

    if (response.statusCode == 200) {
      Navigator.pop(context, true); // retorna true para atualizar a lista
    } else {
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text('Erro ao atualizar reserva')),
      );
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text("Editar Reserva"), backgroundColor: Colors.orange),
      body: Padding(
        padding: const EdgeInsets.all(16),
        child: SingleChildScrollView(
          child: Column(
            children: [
              TextField(
                controller: _descriptionController,
                decoration: InputDecoration(labelText: 'Descrição'),
              ),
              TextField(
                controller: _locationController,
                decoration: InputDecoration(labelText: 'Local'),
              ),
              TextField(
                controller: _guestsController,
                keyboardType: TextInputType.number,
                decoration: InputDecoration(labelText: 'Convidados'),
              ),
              SizedBox(height: 20),
              Align(
                alignment: Alignment.centerLeft,
                child: Text(
                  "Data e hora do evento:",
                  style: TextStyle(fontWeight: FontWeight.bold),
                ),
              ),
              SizedBox(height: 8),
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  Text(_formattedDateTime()),
                  Row(
                    children: [
                      TextButton(
                        onPressed: _selectDate,
                        child: Text('Selecionar data'),
                      ),
                      TextButton(
                        onPressed: _selectTime,
                        child: Text('Selecionar hora'),
                      ),
                    ],
                  ),
                ],
              ),
              SizedBox(height: 20),
              ElevatedButton(
                onPressed: updateReservation,
                child: Text("Salvar Alterações"),
                style: ElevatedButton.styleFrom(backgroundColor: Colors.orange),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
