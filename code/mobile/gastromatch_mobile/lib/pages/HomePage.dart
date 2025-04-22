import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';

// pages
import 'ChefDetailPage.dart';
import 'ChefSearch.dart';
import 'LoginPage.dart';

class HomePage extends StatefulWidget {
  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  List<Map<String, String>> chefs = [];
  bool isLoading = true;

  @override
  void initState() {
    super.initState();
    fetchChefs();
  }

  Future<void> fetchChefs() async {
    final url = Uri.parse(
      'http://10.0.2.2:8080/api/chefs',
    ); // ajustar com a rota correta, não consegui rodar o back ainda
    try {
      final response = await http.get(url);
      if (response.statusCode == 200) {
        List<dynamic> data = json.decode(response.body);
        setState(() {
          chefs =
              data.map((chef) {
                // Aqui você converte para Map<String, String>
                return {
                  'name': chef['name'].toString(),
                  'specialty': chef['specialization'].toString(),
                  'image': 'assets/images/default_chef.png', // imagem genérica
                };
              }).toList(); // Agora chefs é do tipo List<Map<String, String>>
          isLoading = false;
        });
      } else {
        print('Erro ao carregar chefs: ${response.statusCode}');
      }
    } catch (e) {
      print('Erro na requisição: $e');
    }
  }

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
      drawer: Drawer(child: ListView(padding: EdgeInsets.zero, children: [

          ],
        )),
      body:
          isLoading
              ? Center(child: CircularProgressIndicator())
              : Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Stack(
                    children: [
                      Container(
                        height: 200,
                        width: double.infinity,
                        decoration: BoxDecoration(
                          image: DecorationImage(
                            image: AssetImage(
                              'assets/images/CozItalianaBanner.png',
                            ),
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
                            color: Colors.white,
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
                      style: TextStyle(
                        fontSize: 20,
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                  ),
                  SizedBox(height: 5),
                  Expanded(
                    child: ListView.builder(
                      itemCount: chefs.length,
                      itemBuilder: (context, index) {
                        return Card(
                          margin: EdgeInsets.symmetric(
                            horizontal: 10,
                            vertical: 8,
                          ),
                          elevation: 4,
                          shape: RoundedRectangleBorder(
                            borderRadius: BorderRadius.circular(10),
                          ),
                          child: ListTile(
                            leading: CircleAvatar(
                              backgroundImage: AssetImage(
                                chefs[index]['image']!,
                              ),
                              radius: 30,
                            ),
                            title: Text(
                              chefs[index]['name']!,
                              style: TextStyle(fontWeight: FontWeight.bold),
                            ),
                            subtitle: Text(chefs[index]['specialty']!),
                            trailing: Icon(
                              Icons.arrow_forward_ios,
                              color: Colors.grey,
                            ),
                            onTap: () {
                              Navigator.push(
                                context,
                                MaterialPageRoute(
                                  builder:
                                      (context) => ChefDetailPage(
                                        chef: {
                                          'name':
                                              chefs[index]['name'].toString(),
                                          'specialty':
                                              chefs[index]['specialty']
                                                  .toString(),
                                          'image':
                                              chefs[index]['image'].toString(),
                                        },
                                      ),
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
    // logout logic aqui se estiver usando Firebase
  }
}
