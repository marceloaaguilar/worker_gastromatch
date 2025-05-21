import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:gastromatch_mobile/pages/ChefDetailPage.dart';

void main() {
  testWidgets('ChefDetailPage displays chef name and image', (WidgetTester tester) async {
    final chefData = {
      'id': '1',
      'name': 'Chef Ana',
      'image': 'https://via.placeholder.com/150',
      'specialty': 'Culinária Francesa'
    };

    await tester.pumpWidget(
      MaterialApp(
        home: ChefDetailPage(chef: chefData),
      ),
    );

    expect(find.text('Chef Ana'), findsNWidgets(2));
    expect(find.text('Culinária Francesa'), findsOneWidget);
    expect(find.byType(CircleAvatar), findsOneWidget);
    expect(find.byType(ElevatedButton), findsOneWidget);
  });
}
