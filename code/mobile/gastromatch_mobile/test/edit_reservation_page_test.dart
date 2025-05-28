import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:gastromatch_mobile/pages/EditReservationPage.dart';
import 'package:shared_preferences/shared_preferences.dart';

void main() {
  // Dados fictícios de reserva
  final mockReservation = {
    'id': 1,
    'description': 'Jantar de aniversário',
    'location': 'Salão de festas',
    'guests': 10,
    'date': DateTime.now().toIso8601String(),
  };

  setUp(() async {
    // Garante um token de autenticação para o teste (não usado diretamente aqui)
    SharedPreferences.setMockInitialValues({'auth_token': 'fake-token'});
  });

  testWidgets('Exibe os campos com os dados da reserva', (
    WidgetTester tester,
  ) async {
    await tester.pumpWidget(
      MaterialApp(home: EditReservationPage(reservation: mockReservation)),
    );

    // Verifica se os campos estão preenchidos
    expect(find.text('Jantar de aniversário'), findsOneWidget);
    expect(find.text('Salão de festas'), findsOneWidget);
    expect(find.text('10'), findsOneWidget);
    expect(find.text('Data e hora do evento:'), findsOneWidget);
    expect(find.text('Selecionar data'), findsOneWidget);
    expect(find.text('Selecionar hora'), findsOneWidget);
    expect(find.text('Salvar Alterações'), findsOneWidget);
  });

  testWidgets('Exibe snackbar se não selecionar data ou hora', (
    WidgetTester tester,
  ) async {
    final reservation = Map<String, dynamic>.from(mockReservation);
    reservation['date'] = ''; // Força ausência de data para o teste

    await tester.pumpWidget(
      MaterialApp(home: EditReservationPage(reservation: reservation)),
    );

    await tester.tap(find.text('Salvar Alterações'));
    await tester.pump(); // Processa o snackbar

    expect(find.byType(SnackBar), findsOneWidget);
    expect(find.text('Por favor, selecione a data e hora'), findsOneWidget);
  });

  testWidgets('Campos podem ser editados', (WidgetTester tester) async {
    await tester.pumpWidget(
      MaterialApp(home: EditReservationPage(reservation: mockReservation)),
    );

    await tester.enterText(find.byType(TextField).at(0), 'Novo Evento');
    await tester.enterText(find.byType(TextField).at(1), 'Novo Local');
    await tester.enterText(find.byType(TextField).at(2), '50');

    expect(find.text('Novo Evento'), findsOneWidget);
    expect(find.text('Novo Local'), findsOneWidget);
    expect(find.text('50'), findsOneWidget);
  });
}
