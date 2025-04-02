import 'package:flutter/material.dart';

class TermsPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Termos e Condições"),
        backgroundColor: Colors.orange,
      ),
      body: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
        Text(" Trabalho em progresso"),
        Stack(
          children: [
            Container(
              height: 200,
              width: double.infinity,
              decoration: BoxDecoration(
                image: DecorationImage(
                  image: AssetImage('assets/images/WIP.png'),
                  fit: BoxFit.cover,
                ),
              ),
            )
          ],
        ),
      ]),
    );
  }
}
