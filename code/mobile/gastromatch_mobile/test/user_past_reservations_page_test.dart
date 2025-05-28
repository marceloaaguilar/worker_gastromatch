import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:gastromatch_mobile/pages/UserPastReservationsPage.dart';

void main() {
  setUp(() {
    SharedPreferences.setMockInitialValues({
      'user_id': 1,
      'auth_token': 'token_fake',
    });
  });


  testWidgets('Exibe mensagem de erro quando ocorre erro de rede', (WidgetTester tester) async {
    // Simula erro ao buscar reservas
  setUp(() {
    SharedPreferences.setMockInitialValues({
      'user_id': 1,
      'auth_token': 'token_fake',
    });
  });

    await tester.pumpWidget(MaterialApp(home: UserPastReservationsPage()));
    await tester.pumpAndSettle(); // espera o carregamento e reconstrução

    expect(find.textContaining('Erro ao carregar'), findsWidgets);
  });

  testWidgets('Exibe mensagem quando não há reservas passadas', (WidgetTester tester) async {

    SharedPreferences.setMockInitialValues({
      'user_id': 1,
      'auth_token': 'token_fake',
    });


    await tester.pumpWidget(MaterialApp(home: UserPastReservationsPage()));
    await tester.pumpAndSettle();

    expect(find.textContaining('Nenhuma reserva passada'), findsWidgets);
  });
}
