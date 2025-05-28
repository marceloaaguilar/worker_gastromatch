import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'package:shared_preferences/shared_preferences.dart';

class RatingPage extends StatefulWidget {
  final int reservationId;

  RatingPage({required this.reservationId});

  @override
  _RatingPageState createState() => _RatingPageState();
}

class _RatingPageState extends State<RatingPage> {
  int selectedRating = 0;
  String comment = '';
  final Color baseColor = Colors.orange;

  List<Color> _getGradientColors(int rating) {
    switch (rating) {
      case 1:
        return [Colors.red, Colors.redAccent];
      case 2:
        return [Colors.red, Colors.orange];
      case 3:
        return [Colors.amber, Colors.yellowAccent]; // Brighter yellow here
      case 4:
        return [Colors.yellowAccent, Colors.lightGreen];
      case 5:
        return [Colors.green, Colors.green];
      default:
        return [Colors.grey, Colors.grey];
    }
  }

  Future<void> submitRating() async {
    final prefs = await SharedPreferences.getInstance();
    final token = prefs.getString('auth_token');

    final response = await http.patch(
      Uri.parse('http://10.0.2.2:8080/api/reservations/rating/${widget.reservationId}'),
      headers: {
        'Authorization': 'Bearer $token',
        'Content-Type': 'application/json',
      },
      body: jsonEncode({
        'rating': selectedRating,
        'comment': comment.trim().isEmpty ? null : comment.trim(),
      }),
    );

    if (response.statusCode == 200) {
      Navigator.pop(context, true);
    } else {
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text('Erro ao enviar avaliação')),
      );
    }
  }

  Widget _buildStar(int index) {
    bool selected = index <= selectedRating;
    List<Color> colors = _getGradientColors(index);

    return GestureDetector(
      onTap: () {
        setState(() {
          selectedRating = index;
        });
      },
      child: Icon(
        Icons.star,
        size: 40,
        color: selected
            ? Color.lerp(colors[0], colors[1], 0.5)
            : Colors.grey.shade400,
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Avaliar Reserva'),
        backgroundColor: baseColor,
      ),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text('Nota:', style: TextStyle(fontSize: 18)),
            Row(
              children: List.generate(5, (index) => _buildStar(index + 1)),
            ),
            SizedBox(height: 20),
            Text('Comentário:', style: TextStyle(fontSize: 18)),
            TextField(
              maxLines: 5,
              decoration: InputDecoration(
                hintText: 'Digite aqui um comentário sobre sua experiência:',
                border: OutlineInputBorder(),
              ),
              onChanged: (value) => comment = value,
            ),
            SizedBox(height: 20),
            Center(
              child: ElevatedButton(
                onPressed: selectedRating > 0 ? submitRating : null,
                child: Text('Enviar Avaliação'),
                style: ElevatedButton.styleFrom(
                  backgroundColor: baseColor,
                  foregroundColor: Colors.grey.shade800,
                  padding: EdgeInsets.symmetric(horizontal: 32, vertical: 12),
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
