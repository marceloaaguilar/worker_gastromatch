import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:http/http.dart' as http;
import 'package:intl/intl.dart'; // ✅ import para formatação da data
import 'dart:convert';

import 'EditReservationPage.dart';

class UserReservationsPage extends StatefulWidget {
  @override
  _UserReservationsPageState createState() => _UserReservationsPageState();
}

class _UserReservationsPageState extends State<UserReservationsPage> {
  List<dynamic> reservations = [];
  bool isLoading = true;
  bool hasError = false;

  @override
  void initState() {
    super.initState();
    fetchReservations();
  }

  Future<void> fetchReservations() async {
    final prefs = await SharedPreferences.getInstance();
    final userId = prefs.getInt('user_id');
    final token = prefs.getString('auth_token');

    if (userId == null || token == null) {
      setState(() {
        hasError = true;
        isLoading = false;
      });
      return;
    }

    try {
      final response = await http.get(
        Uri.parse('http://10.0.2.2:8080/api/reservations/user/$userId'),
        headers: {
          'Authorization': 'Bearer $token',
          'Content-Type': 'application/json',
        },
      );

      if (response.statusCode == 200) {
        final data = json.decode(response.body);
        setState(() {
          reservations = data['data']['reservations'];
          isLoading = false;
        });
      } else {
        throw Exception('Erro ao carregar reservas');
      }
    } catch (e) {
      setState(() {
        hasError = true;
        isLoading = false;
      });
      print("Erro ao buscar reservas: $e");
    }
  }

  Future<void> deleteReservation(int id) async {
    final prefs = await SharedPreferences.getInstance();
    final token = prefs.getString('auth_token');

    final response = await http.delete(
      Uri.parse('http://10.0.2.2:8080/api/reservations/$id'),
      headers: {'Authorization': 'Bearer $token'},
    );

    if (response.statusCode == 204) {
      ScaffoldMessenger.of(
        context,
      ).showSnackBar(SnackBar(content: Text('Reserva excluída com sucesso')));
      fetchReservations(); // Atualiza lista
    } else {
      ScaffoldMessenger.of(
        context,
      ).showSnackBar(SnackBar(content: Text('Erro ao excluir reserva')));
    }
  }

  String formatarDataComHora(String isoString) {
    try {
      final date = DateTime.parse(isoString).toLocal();
      final formatter = DateFormat("d 'de' MMMM 'de' y 'às' HH:mm", 'pt_BR');
      return formatter.format(date);
    } catch (_) {
      return isoString;
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Minhas Reservas"),
        backgroundColor: Colors.orange,
        foregroundColor: Colors.white,
      ),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child:
            isLoading
                ? Center(child: CircularProgressIndicator(color: Colors.orange))
                : hasError
                ? Center(
                  child: Column(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      Icon(Icons.error_outline, color: Colors.red, size: 40),
                      SizedBox(height: 10),
                      Text(
                        'Erro ao carregar suas reservas.\nTente novamente mais tarde.',
                        textAlign: TextAlign.center,
                        style: TextStyle(fontSize: 16),
                      ),
                    ],
                  ),
                )
                : reservations.isEmpty
                ? Center(
                  child: Text(
                    "Você ainda não fez nenhuma reserva.",
                    style: TextStyle(fontSize: 16, color: Colors.grey),
                  ),
                )
                : ListView.builder(
                  itemCount: reservations.length,
                  itemBuilder: (context, index) {
                    final res = reservations[index];
                    return Card(
                      margin: EdgeInsets.symmetric(vertical: 10),
                      shape: RoundedRectangleBorder(
                        borderRadius: BorderRadius.circular(10),
                      ),
                      elevation: 3,
                      child: ListTile(
                        contentPadding: EdgeInsets.all(16),
                        title: Text(
                          res['description'] ?? 'Sem descrição',
                          style: TextStyle(
                            fontWeight: FontWeight.bold,
                            fontSize: 16,
                          ),
                        ),
                        subtitle: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            SizedBox(height: 5),
                            Text("Data: ${formatarDataComHora(res['date'])}"),

                            Text("Convidados: ${res['guests']}"),
                            Text("Local: ${res['location']}"),
                          ],
                        ),
                        leading: Icon(Icons.event, color: Colors.orange),
                        trailing: IconButton(
                          icon: Icon(Icons.delete, color: Colors.red),
                          onPressed: () {
                            showDialog(
                              context: context,
                              builder:
                                  (context) => AlertDialog(
                                    title: Text('Confirmar exclusão'),
                                    content: Text(
                                      'Deseja realmente excluir esta reserva?',
                                    ),
                                    actions: [
                                      TextButton(
                                        child: Text('Cancelar'),
                                        onPressed: () => Navigator.pop(context),
                                      ),
                                      TextButton(
                                        child: Text(
                                          'Excluir',
                                          style: TextStyle(color: Colors.red),
                                        ),
                                        onPressed: () {
                                          Navigator.pop(context);
                                          deleteReservation(res['id']);
                                        },
                                      ),
                                    ],
                                  ),
                            );
                          },
                        ),
                        onTap: () async {
                          final updated = await Navigator.push(
                            context,
                            MaterialPageRoute(
                              builder:
                                  (context) =>
                                      EditReservationPage(reservation: res),
                            ),
                          );
                          if (updated == true) fetchReservations();
                        },
                      ),
                    );
                  },
                ),
      ),
    );
  }
}
