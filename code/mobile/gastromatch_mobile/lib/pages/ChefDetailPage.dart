import 'package:flutter/material.dart';

class ChefDetailPage extends StatelessWidget {
  final Map<String, String> chef;

  ChefDetailPage({required this.chef});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text(chef['name']!), backgroundColor: Colors.white),
      body: Padding(
        padding: EdgeInsets.all(16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            CircleAvatar(
              backgroundImage: AssetImage(chef['image']!),
              radius: 50,
            ),
            SizedBox(height: 20),
            Text(
              chef['name']!,
              style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold),
            ),
            SizedBox(height: 10),
            Text(
              chef['specialty']!,
              style: TextStyle(fontSize: 18, color: Colors.grey[700]),
            ),
          ],
        ),
      ),
    );
  }
}
