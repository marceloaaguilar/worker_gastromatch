import 'package:flutter/material.dart';
import 'ReservationFormPage.dart';

class ChefDetailPage extends StatelessWidget {
  final Map<String, String> chef;

  ChefDetailPage({required this.chef});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(chef['name'] ?? 'Chef'),
        backgroundColor: Colors.white,
      ),
      body: Padding(
        padding: EdgeInsets.all(16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            CircleAvatar(
              backgroundImage:
                  (chef['image'] != null && chef['image']!.startsWith('http'))
                      ? NetworkImage(chef['image']!)
                      : AssetImage(chef['image'] ?? '') as ImageProvider,
              radius: 50,
            ),
            SizedBox(height: 20),
            Text(
              chef['name'] ?? '',
              style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold),
            ),
            SizedBox(height: 10),
            Text(
              chef['specialty'] ?? '',
              style: TextStyle(fontSize: 18, color: Colors.grey[700]),
            ),
            Spacer(),
            ElevatedButton(
              onPressed: () {
                final chefIdStr = chef['id'];
                if (chefIdStr == null) {
                  ScaffoldMessenger.of(context).showSnackBar(
                    SnackBar(content: Text('ID do chef não disponível')),
                  );
                  return;
                }

                Navigator.push(
                  context,
                  MaterialPageRoute(
                    builder:
                        (context) => ReservationFormPage(
                          chefId: int.parse(chefIdStr),
                          chefName: chef['name'] ?? '',
                        ),
                  ),
                );
              },
              child: Text("Marcar Reserva"),
              style: ElevatedButton.styleFrom(
                backgroundColor: Colors.orange,
                foregroundColor: Colors.white,
                padding: EdgeInsets.symmetric(horizontal: 32, vertical: 12),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
