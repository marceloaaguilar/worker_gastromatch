import 'package:flutter/material.dart';

void main() {
  runApp(GastroMatchApp());
}

class GastroMatchApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'GastroMatch',
      theme: ThemeData(
        primarySwatch: Colors.orange,
        visualDensity: VisualDensity.adaptivePlatformDensity,
      ),
      home: HomePage(),
    );
  }
}

class HomePage extends StatelessWidget {
  final List<Map<String, String>> chefs = [
    {
      'name': 'Chef Marina Souza',
      'specialty': 'Cozinha Italiana',
      'image': 'assets/images/MarinaSouzaChef.png',
    },
    {
      'name': 'Chef Marina Souza',
      'specialty': 'Cozinha Italiana',
      'image': 'assets/images/MarinaSouzaChef.png',
    },
    {
      'name': 'Chef Marina Souza',
      'specialty': 'Cozinha Italiana',
      'image': 'assets/images/MarinaSouzaChef.png',
    },
    {
      'name': 'Chef Marina Souza',
      'specialty': 'Cozinha Italiana',
      'image': 'assets/images/MarinaSouzaChef.png',
    },
    {
      'name': 'Chef Marina Souza',
      'specialty': 'Cozinha Italiana',
      'image': 'assets/images/MarinaSouzaChef.png',
    },
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(
          'GastroMatch',
          style: TextStyle(
            color: Colors.orange,
            fontSize: 24,
            fontWeight: FontWeight.bold,
          ),
        ),
        backgroundColor: Colors.white,
        actions: [
          IconButton(
            icon: Icon(Icons.search, color: Colors.orange),
            onPressed: () {
              showSearch(context: context, delegate: ChefSearch(chefs));
            },
          ),
        ],
      ),
      drawer: Drawer(
        child: ListView(
          padding: EdgeInsets.zero,
          children: [
            DrawerHeader(
              decoration: BoxDecoration(color: Colors.white),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Icon(Icons.restaurant, size: 50, color: Colors.orange),
                  SizedBox(height: 10),
                  Text(
                    'GastroMatch',
                    style: TextStyle(
                      color: Colors.orange,
                      fontSize: 24,
                      fontWeight: FontWeight.bold,
                    ),
                  ),
                ],
              ),
            ),

            ListTile(
              leading: Icon(Icons.home),
              title: Text('Home'),
              onTap: () => Navigator.pop(context),
            ),
            ListTile(
              leading: Icon(Icons.favorite),
              title: Text('Favoritos'),
              onTap: () {},
            ),
            ListTile(
              leading: Icon(Icons.person),
              title: Text('Perfil'),
              onTap: () {},
            ),
            ListTile(
              leading: Icon(Icons.settings),
              title: Text('Configurações'),
              onTap: () {},
            ),
          ],
        ),
      ),
      body: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          // Imagem de destaque
          Stack(
            children: [
              Container(
                height: 200,
                width: double.infinity,
                decoration: BoxDecoration(
                  image: DecorationImage(
                    image: AssetImage('assets/images/CozItalianaBanner.png'),
                    fit: BoxFit.cover,
                  ),
                ),
              ),
              Container(
                height: 200,
                color: Colors.black.withOpacity(0.3),
                alignment: Alignment.center,
                child: Text(
                  "Encontre o Chef Ideal para seu Evento!",
                  style: TextStyle(
                    color: const Color.fromARGB(255, 255, 255, 255),
                    fontSize: 25,
                    fontWeight: FontWeight.bold,
                  ),
                  textAlign: TextAlign.center,
                ),
              ),
            ],
          ),
          SizedBox(height: 10),
          Padding(
            padding: EdgeInsets.symmetric(horizontal: 16),
            child: Text(
              "Chefs Disponíveis",
              style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
            ),
          ),
          SizedBox(height: 5),
          Expanded(
            child: ListView.builder(
              itemCount: chefs.length,
              itemBuilder: (context, index) {
                return Card(
                  margin: EdgeInsets.symmetric(horizontal: 10, vertical: 8),
                  elevation: 4,
                  shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(10),
                  ),
                  child: ListTile(
                    leading: CircleAvatar(
                      backgroundImage: AssetImage(
                        chefs[index]['image']!,
                      ), // Agora usando AssetImage
                      radius: 30,
                    ),
                    title: Text(
                      chefs[index]['name']!,
                      style: TextStyle(fontWeight: FontWeight.bold),
                    ),
                    subtitle: Text(chefs[index]['specialty']!),
                    trailing: Icon(Icons.arrow_forward_ios, color: Colors.grey),
                    onTap: () {
                      Navigator.push(
                        context,
                        MaterialPageRoute(
                          builder:
                              (context) => ChefDetailPage(chef: chefs[index]),
                        ),
                      );
                    },
                  ),
                );
              },
            ),
          ),
        ],
      ),
    );
  }
}

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

class ChefSearch extends SearchDelegate {
  final List<Map<String, String>> chefs;
  ChefSearch(this.chefs);

  @override
  List<Widget> buildActions(BuildContext context) {
    return [
      IconButton(
        icon: Icon(Icons.clear),
        onPressed: () {
          query = '';
        },
      ),
    ];
  }

  @override
  Widget buildLeading(BuildContext context) {
    return IconButton(
      icon: Icon(Icons.arrow_back),
      onPressed: () {
        close(context, null);
      },
    );
  }

  @override
  Widget buildResults(BuildContext context) {
    return buildSuggestions(context);
  }

  @override
  Widget buildSuggestions(BuildContext context) {
    final List<Map<String, String>> filteredChefs = chefs.where((chef) {
      return chef['name']!.toLowerCase().contains(query.toLowerCase());
    }).toList();

    return ListView.builder(
      itemCount: filteredChefs.length,
      itemBuilder: (context, index) {
        return ListTile(
          title: Text(filteredChefs[index]['name']!),
          subtitle: Text(filteredChefs[index]['specialty']!),
          onTap: () {
            close(context, null);
            Navigator.push(
              context,
              MaterialPageRoute(
                builder: (context) => ChefDetailPage(chef: filteredChefs[index]),
              ),
            );
          },
        );
      },
    );
  }
}
