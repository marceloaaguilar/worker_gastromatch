import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:gastromatch_mobile/pages/ChefSearch.dart';
import 'package:gastromatch_mobile/pages/ChefDetailPage.dart';

void main() {
  // Lista fictícia de chefs
  final mockChefs = [
    {'id': '1', 'name': 'Chef Ana', 'specialty': 'Italiana', 'image': 'assets/images/imgexemplo.png'},
    {'id': '2', 'name': 'Chef Bruno', 'specialty': 'Brasileira', 'image': 'assets/images/imgexemplo.png'},
    {'id': '3', 'name': 'Chef Carla', 'specialty': 'Japonesa', 'image': 'assets/images/imgexemplo.png'},
  ];

  testWidgets('ChefSearch mostra todos os chefs sem filtro', (WidgetTester tester) async {
    await tester.pumpWidget(MaterialApp(
      home: Scaffold(
        body: Builder(
          builder: (context) {
            return ElevatedButton(
              onPressed: () {
                showSearch(
                  context: context,
                  delegate: ChefSearch(mockChefs),
                );
              },
              child: Text('Buscar'),
            );
          },
        ),
      ),
    ));

    // Abre a pesquisa
    await tester.tap(find.text('Buscar'));
    await tester.pumpAndSettle();

    // Espera que todos os chefs estejam na tela
    for (var chef in mockChefs) {
      expect(find.text(chef['name']!), findsOneWidget);
      expect(find.text(chef['specialty']!), findsOneWidget);
    }
  });

  testWidgets('ChefSearch filtra resultados corretamente', (WidgetTester tester) async {
    await tester.pumpWidget(MaterialApp(
      home: Scaffold(
        body: Builder(
          builder: (context) {
            return ElevatedButton(
              onPressed: () {
                showSearch(
                  context: context,
                  delegate: ChefSearch(mockChefs),
                );
              },
              child: Text('Buscar'),
            );
          },
        ),
      ),
    ));

    await tester.tap(find.text('Buscar'));
    await tester.pumpAndSettle();

    await tester.enterText(find.byType(TextField), 'Carla');
    await tester.pumpAndSettle();

    expect(find.text('Chef Carla'), findsOneWidget);
    expect(find.text('Chef Ana'), findsNothing);
  });

  testWidgets('ChefSearch limpa o campo de busca ao clicar no botão clear', (WidgetTester tester) async {
    await tester.pumpWidget(MaterialApp(
      home: Scaffold(
        body: Builder(
          builder: (context) {
            return ElevatedButton(
              onPressed: () {
                showSearch(
                  context: context,
                  delegate: ChefSearch(mockChefs),
                );
              },
              child: Text('Buscar'),
            );
          },
        ),
      ),
    ));

    await tester.tap(find.text('Buscar'));
    await tester.pumpAndSettle();

    await tester.enterText(find.byType(TextField), 'Ana');
    await tester.pumpAndSettle();

    expect(find.text('Chef Ana'), findsOneWidget);

    // Pressiona o botão de limpar
    await tester.tap(find.byIcon(Icons.clear));
    await tester.pumpAndSettle();

    // Todos os chefs voltam a aparecer
    expect(find.text('Chef Ana'), findsOneWidget);
    expect(find.text('Chef Bruno'), findsOneWidget);
    expect(find.text('Chef Carla'), findsOneWidget);
  });
}
