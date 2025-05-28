import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:http/http.dart' as http;
import 'package:http/testing.dart';
import 'dart:convert';

import 'package:gastromatch_mobile/pages/UserReservationsPage.dart';

void main() {
  setUp(() {
    SharedPreferences.setMockInitialValues({
      'user_id': 1,
      'auth_token': 'token_fake',
    });
  });

  testWidgets('Exibe carregamento, erro e lista vazia corretamente', (
    WidgetTester tester,
  ) async {
    final client = MockClient((request) async {
      if (request.url.toString().contains('/user/1')) {
        return http.Response(
          jsonEncode({
            'reservations': {'rows': []},
          }),
          200,
        );
      }
      return http.Response('Erro', 400);
    });

    await tester.pumpWidget(MaterialApp(home: UserReservationsPage()));

    await tester.pump(); // Carregando

    await tester.pumpAndSettle();
    expect(find.text('Você ainda não tem reservas futuras.'), findsOneWidget);
  });
}
