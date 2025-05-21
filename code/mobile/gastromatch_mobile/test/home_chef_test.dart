import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:gastromatch_mobile/pages/HomeChef.dart';

void main() {
  testWidgets('HomeChef page loads and shows AppBar and content', (WidgetTester tester) async {
    await tester.pumpWidget(
      MaterialApp(
        home: Scaffold(body: HomeChef()),
      ),
    );

    expect(find.byType(AppBar), findsOneWidget);
    expect(find.text('Reservas Recebidas'), findsOneWidget);
  });
}
