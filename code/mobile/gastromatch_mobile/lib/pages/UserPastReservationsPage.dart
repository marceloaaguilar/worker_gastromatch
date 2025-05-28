import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'package:shared_preferences/shared_preferences.dart';

import 'RatingPage.dart';

class UserPastReservationsPage extends StatefulWidget {
  @override
  _UserPastReservationsPageState createState() => _UserPastReservationsPageState();
}

class _UserPastReservationsPageState extends State<UserPastReservationsPage> {
  List<dynamic> reservations = [];
  bool isLoading = true;
  bool hasError = false;
  Map<int, String> chefNames = {};

  final Color primaryColor = Colors.orange;

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
        Uri.parse('http://10.0.2.2:8080/api/reservations/user/past/$userId'),
        headers: {
          'Authorization': 'Bearer $token',
          'Content-Type': 'application/json',
        },
      );

      if (response.statusCode == 200) {
        final data = json.decode(response.body);
        setState(() {
          reservations = data['reservations']['rows'];
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

  Future<String> fetchChefName(int chefId) async {
    final prefs = await SharedPreferences.getInstance();
    final token = prefs.getString('auth_token');
    try {
      final chefRes = await http.get(
        Uri.parse('http://10.0.2.2:8080/api/chefs/$chefId'),
        headers: {
          'Authorization': 'Bearer $token',
          'Content-Type': 'application/json',
        },
      );

      if (chefRes.statusCode == 200) {
        final chefData = json.decode(chefRes.body);
        final userId = chefData['data']['chef']['user_id'];

        final userRes = await http.get(
          Uri.parse('http://10.0.2.2:8080/api/users/$userId'),
          headers: {
            'Authorization': 'Bearer $token',
            'Content-Type': 'application/json',
          },
        );

        if (userRes.statusCode == 200) {
          final userData = json.decode(userRes.body);
          return userData['data']['user']['name'];
        }
      }
    } catch (e) {
      print('Erro ao buscar nome do chef $chefId: $e');
    }
    return 'Desconhecido';
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Reservas Passadas'),
        backgroundColor: primaryColor,
      ),
      body: isLoading
          ? Center(child: CircularProgressIndicator(color: primaryColor))
          : hasError
          ? Center(
        child: Text(
          'Erro ao carregar reservas.',
          style: TextStyle(color: primaryColor),
        ),
      )
          : reservations.isEmpty
          ? Center(
        child: Text(
          'Nenhuma reserva passada encontrada.',
          style: TextStyle(color: primaryColor),
        ),
      )
          : ListView.builder(
        itemCount: reservations.length,
        itemBuilder: (context, index) {
          final reserva = reservations[index];
          // final description = reserva['description'] ?? 'Sem descrição';
          final description = reserva['id'].toString() ?? 'Sem descrição';
          final chefId = reserva['chef'];
          final rating = reserva['rating'];

          return Container(
            margin: EdgeInsets.symmetric(horizontal: 12, vertical: 6),
            padding: EdgeInsets.all(12),
            decoration: BoxDecoration(
              color: Colors.grey.shade200,
              borderRadius: BorderRadius.circular(16),
              boxShadow: [
                BoxShadow(
                  color: Colors.black12,
                  blurRadius: 6,
                  offset: Offset(0, 3),
                ),
              ],
            ),
            child: Row(
              crossAxisAlignment: CrossAxisAlignment.center,
              children: [
                Expanded(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      FutureBuilder<String>(
                        future: fetchChefName(chefId),
                        builder: (context, snapshot) {
                          if (snapshot.connectionState == ConnectionState.waiting) {
                            return Text(
                              'Carregando nome do chef...',
                              style: TextStyle(
                                fontSize: 18,
                                fontWeight: FontWeight.bold,
                                color: primaryColor,
                              ),
                            );
                          } else if (snapshot.hasError) {
                            return Text(
                              'Erro ao carregar chef',
                              style: TextStyle(
                                fontSize: 18,
                                fontWeight: FontWeight.bold,
                                color: primaryColor,
                              ),
                            );
                          } else {
                            return Text(
                              snapshot.data ?? 'Chef desconhecido',
                              style: TextStyle(
                                fontSize: 18,
                                fontWeight: FontWeight.bold,
                                color: primaryColor,
                              ),
                            );
                          }
                        },
                      ),
                      SizedBox(height: 4),
                      Text(
                        description,
                        style: TextStyle(
                          fontSize: 12,
                          color: Colors.grey[700],
                        ),
                      ),

                    ],
                  ),
                ),
                rating != null
                    ? Container(
                  width: 40,
                  height: 40,
                  decoration: BoxDecoration(
                    shape: BoxShape.circle,
                    gradient: LinearGradient(
                      colors: _getGradientColors(rating),
                      begin: Alignment.topLeft,
                      end: Alignment.bottomRight,
                    ),
                  ),
                  child: Center(
                    child: Text(
                      rating.toString(),
                      style: TextStyle(
                        color: Colors.grey.shade800,
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                  ),
                )
                    : GestureDetector(
                  onTap: () async {
                    final result = await Navigator.push(
                      context,
                      MaterialPageRoute(
                        builder: (_) => RatingPage(reservationId: reserva['id']),
                      ),
                    );

                    if (result == true) {
                      // Re-fetch the reservations when a new rating was submitted
                      fetchReservations();
                    }
                  },
                  child: Container(
                    padding: EdgeInsets.symmetric(horizontal: 12, vertical: 8),
                    decoration: BoxDecoration(
                      border: Border.all(color: primaryColor.withAlpha(128)),
                      borderRadius: BorderRadius.circular(12),
                      color: Colors.grey.shade50,
                    ),
                    child: Row(
                      mainAxisSize: MainAxisSize.min,
                      children: [
                        Icon(Icons.rate_review, color: primaryColor, size: 24),
                        SizedBox(width: 6),
                        Text(
                          'Avaliar',
                          style: TextStyle(
                            color: primaryColor,
                            fontSize: 12,
                          ),
                        ),
                      ],
                    ),
                  ),
                ),
              ],
            ),
          );
        },
      ),
    );
  }

  List<Color> _getGradientColors(dynamic rating) {
    switch (rating) {
      case 1:
        return [Colors.red, Colors.red];
      case 2:
        return [Colors.orange, Colors.orange];
      case 3:
        return [Colors.yellow, Colors.yellowAccent]; // Brighter yellow here
      case 4:
        return [Colors.lightGreen, Colors.lightGreen];
      default:
        return [Colors.green, Colors.green];
    }
  }
}
