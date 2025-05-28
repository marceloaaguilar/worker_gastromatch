import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:gastromatch_mobile/pages/LoginPage.dart';
import 'package:gastromatch_mobile/input.dart';

void main() {
  setUp(() {
    SharedPreferences.setMockInitialValues({});
  });

  testWidgets('Exibe campos de email e senha', (WidgetTester tester) async {
    await tester.pumpWidget(MaterialApp(home: LoginPage()));

    expect(find.byType(CustomInputField), findsNWidgets(2));
    expect(find.text('Email'), findsOneWidget);
    expect(find.text('Senha'), findsOneWidget);
    expect(find.text('Entrar'), findsOneWidget);
  });

  testWidgets('Exibe erro se credenciais forem inválidas', (WidgetTester tester) async {
    await tester.pumpWidget(MaterialApp(home: LoginPage()));

    await tester.enterText(find.byType(CustomInputField).at(0), 'email@teste.com');
    await tester.enterText(find.byType(CustomInputField).at(1), 'senhaerrada');

    await tester.tap(find.text('Entrar'));
    await tester.pumpAndSettle();

    expect(find.textContaining('inválidos'), findsWidgets);
  });

  testWidgets('Exibe indicador de carregamento ao logar', (WidgetTester tester) async {
    await tester.pumpWidget(MaterialApp(home: LoginPage()));

    await tester.enterText(find.byType(CustomInputField).at(0), 'email@teste.com');
    await tester.enterText(find.byType(CustomInputField).at(1), 'senha');

    await tester.tap(find.text('Entrar'));
    await tester.pump(const Duration(milliseconds: 100)); // tempo para exibir loading

    expect(find.byType(CircularProgressIndicator), findsOneWidget);
  });

  testWidgets('Botão de cadastro navega para RegisterPage', (WidgetTester tester) async {
    await tester.pumpWidget(MaterialApp(home: LoginPage()));

    final cadastroButton = find.text('Cadastre-se');
    expect(cadastroButton, findsOneWidget);

    await tester.tap(cadastroButton);
    await tester.pumpAndSettle();

    // Verifica que a tela de login foi substituída
    expect(find.byType(LoginPage), findsNothing);
  });
}
