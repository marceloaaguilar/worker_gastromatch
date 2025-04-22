import 'package:flutter/material.dart';
//pages
import 'ChefDetailPage.dart';
import 'ChefSearch.dart';
import 'LoginPage.dart';

class HomePage extends StatelessWidget {
  final List<Map<String, String>> chefs = [
    {
      'name': 'Chef Marina Souza 1',
      'specialty': 'Cozinha Italiana',
      'image': 'assets/images/MarinaSouzaChef.png',
    },
    {
      'name': 'Chef Marina Souza 2',
      'specialty': 'Cozinha Italiana',
      'image': 'assets/images/MarinaSouzaChef.png',
    },
    {
      'name': 'Chef Marina Souza 3',
      'specialty': 'Cozinha Italiana',
      'image': 'assets/images/MarinaSouzaChef.png',
    },
    {
      'name': 'Chef Marina Souza 4',
      'specialty': 'Cozinha Italiana',
      'image': 'assets/images/MarinaSouzaChef.png',
    },
    {
      'name': 'Chef Marina Souza 5',
      'specialty': 'Cozinha Italiana',
      'image': 'assets/images/MarinaSouzaChef.png',
    },
  ];

  @override
  Widget build(BuildContext context) {
    /*
    User? user = FirebaseAuth.instance.currentUser;
    if (user == null) {
      return Container(
        child: Text("User not found"),
      );

    }
    */
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
            Expanded(
              child: Container(),
            ),
            ListTile(
              leading: Icon(Icons.logout),
              title: Text('Sair'),
              onTap: () {
                _logout(context);
              },
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
                          builder: (context) =>
                              ChefDetailPage(chef: chefs[index]),
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

  void _logout(BuildContext context) {
    /*
    FirebaseAuth.instance.signOut().then((result) {
      Navigator.pushReplacement(
          context, MaterialPageRoute(builder: (context) => LoginPage()));
    });
    */
  }
}
