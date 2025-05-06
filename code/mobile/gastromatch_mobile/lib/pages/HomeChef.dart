import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';

import 'LoginPage.dart';

class HomeChef extends StatefulWidget {
  @override
  _HomeChefState createState() => _HomeChefState();
}

class _HomeChefState extends State<HomeChef> {
  List<dynamic> reservations = [];
  bool isLoading = true;
  bool hasError = false;
  String? userName;

  @override
  void initState() {
    super.initState();
    fetchChefReservations();
  }

  Future<void> fetchChefReservations() async {
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

    final response = await http.get(
      Uri.parse('http://10.0.2.2:8080/api/reservations/user/$userId'),
      headers: {'Authorization': 'Bearer $token'},
    );

    if (response.statusCode == 200) {
      final data = jsonDecode(response.body);
      setState(() {
        reservations = data['data']['reservations'];
        isLoading = false;
      });
    } else {
      setState(() {
        hasError = true;
        isLoading = false;
      });
    }
  }

  void _logout(BuildContext context) async {
    final prefs = await SharedPreferences.getInstance();
    await prefs.remove('auth_token');
    await prefs.remove('user_id');
    await prefs.remove('user_role');
    Navigator.pushAndRemoveUntil(
      context,
      MaterialPageRoute(builder: (context) => LoginPage()),
      (route) => false,
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Reservas Recebidas'),
        backgroundColor: Colors.orange,
        actions: [
          IconButton(
            icon: Icon(Icons.logout),
            onPressed: () => _logout(context),
          )
        ],
      ),
      body: isLoading
          ? Center(child: CircularProgressIndicator())
          : hasError
              ? Center(
                  child: Text(
                    'Erro ao carregar reservas.',
                    style: TextStyle(fontSize: 16),
                  ),
                )
              : reservations.isEmpty
                  ? Center(
                      child: Text(
                        'Nenhuma reserva recebida até o momento.',
                        style: TextStyle(fontSize: 16),
                      ),
                    )
                  : ListView.builder(
                      itemCount: reservations.length,
                      itemBuilder: (context, index) {
                        final r = reservations[index];
                        return Card(
                          margin: EdgeInsets.all(10),
                          child: ListTile(
                            title: Text(
                              r['description'] ?? 'Sem descrição',
                              style: TextStyle(fontWeight: FontWeight.bold),
                            ),
                            subtitle: Column(
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                SizedBox(height: 4),
                                Text('Data: ${r['date']}'),
                                Text('Local: ${r['location']}'),
                                Text('Convidados: ${r['guests']}'),
                                Text('Cliente: ${r['customer_name']}'),
                              ],
                            ),
                          ),
                        );
                      },
                    ),
    );
  }
}
