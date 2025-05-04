import 'dart:convert';
import 'package:http/http.dart' as http;
import 'package:shared_preferences/shared_preferences.dart';
import '../models/reservation.dart';

class ReservationService {
  final String baseUrl = 'http://10.0.2.2:8080/api';

  Future<List<Reservation>> fetchUserReservations() async {
    final prefs = await SharedPreferences.getInstance();
    final userId = prefs.getInt('user_id');

    if (userId == null) throw Exception('Usuário não autenticado');

    final response = await http.get(Uri.parse('$baseUrl/users/$userId/reservations'));

    if (response.statusCode == 200) {
      final data = json.decode(response.body);
      final List<dynamic> list = data['data']['reservations'];
      return list.map((json) => Reservation.fromJson(json)).toList();
    } else {
      throw Exception('Erro ao buscar reservas');
    }
  }
}
