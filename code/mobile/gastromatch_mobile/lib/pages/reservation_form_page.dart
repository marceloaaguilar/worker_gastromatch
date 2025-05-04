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
    if (selectedDate == null || selectedTime == null) {
      setState(() => errorMessage = 'Selecione data e horário');
      return;
    }

    setState(() {
      isLoading = true;
      errorMessage = null;
      successMessage = null;
    });

    final prefs = await SharedPreferences.getInstance();
    final userId = prefs.getInt('user_id');

    if (userId == null) {
      setState(() {
        errorMessage = 'Usuário não autenticado';
        isLoading = false;
      });
      return;
    }

    final dateStr = selectedDate!.toIso8601String().split('T')[0];
    final timeStr = selectedTime!.format(context);

    final response = await http.post(
      Uri.parse('http://10.0.2.2:8080/api/reservations'),
      headers: {'Content-Type': 'application/json'},
      body: jsonEncode({
        'date': dateStr,
        'time': timeStr,
        'user_id': userId,
        'chef_id': widget.chefId,
      }),
    );

    setState(() => isLoading = false);

    if (response.statusCode == 201) {
      setState(() {
        successMessage = 'Reserva criada com sucesso!';
      });
    } else {
      final error = jsonDecode(response.body);
      setState(() {
        errorMessage = error['message'] ?? 'Erro ao criar reserva';
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Reservar com ${widget.chefName}')),
      body: Padding(
        padding: EdgeInsets.all(16),
        child: Column(
          children: [
            if (errorMessage != null)
              Text(errorMessage!, style: TextStyle(color: Colors.red)),
            if (successMessage != null)
              Text(successMessage!, style: TextStyle(color: Colors.green)),
            SizedBox(height: 10),
            ListTile(
              title: Text(selectedDate == null
                  ? 'Selecionar Data'
                  : 'Data: ${selectedDate!.toLocal().toString().split(' ')[0]}'),
              trailing: Icon(Icons.calendar_today),
              onTap: _selectDate,
            ),
            ListTile(
              title: Text(selectedTime == null
                  ? 'Selecionar Horário'
                  : 'Horário: ${selectedTime!.format(context)}'),
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
                      padding: EdgeInsets.symmetric(horizontal: 40, vertical: 12),
                    ),
                  ),
          ],
        ),
      ),
    );
  }
}
