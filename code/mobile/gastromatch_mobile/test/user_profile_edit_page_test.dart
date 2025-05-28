import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:gastromatch_mobile/pages/UserProfileEditPage.dart';
import 'package:gastromatch_mobile/input.dart';

void main() {
  setUp(() async {
    SharedPreferences.setMockInitialValues({
      'auth_token': 'mock_token',
      'user_id': 1,
    });
  });

  testWidgets('Exibe campos de entrada e botão de salvar', (WidgetTester tester) async {
    await tester.pumpWidget(MaterialApp(home: UserProfileEditPage()));

    // Aguarda o build inicial terminar
    await tester.pump();

    expect(find.text('Nome'), findsOneWidget);
    expect(find.text('Email'), findsOneWidget);
    expect(find.text('Telefone'), findsOneWidget);
    expect(find.text('Endereço'), findsOneWidget);
    expect(find.text('Salvar Alterações'), findsOneWidget);
  });

  
}
