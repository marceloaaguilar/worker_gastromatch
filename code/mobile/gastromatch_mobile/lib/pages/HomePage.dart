import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';
import 'package:shimmer/shimmer.dart';
import 'package:shared_preferences/shared_preferences.dart';

// pages
import 'ChefDetailPage.dart';
import 'ChefSearch.dart';
import 'LoginPage.dart';
import 'UserProfileEditPage.dart';
import 'ChatRecords.dart';

class HomePage extends StatefulWidget {
  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  List<Map<String, String>> chefs = [];
  bool isLoading = true;
  bool hasError = false;
  String? userName;

  @override
  void initState() {
    super.initState();
    fetchChefs();
    fetchUserName();
  }

  Future<void> fetchUserName() async {
    final prefs = await SharedPreferences.getInstance();
    final token = prefs.getString('auth_token');
    final userId = prefs.getInt('user_id');

    if (token == null || userId == null) return;

    final url = Uri.parse('http://10.0.2.2:8080/api/users/$userId');
    final response = await http.get(
      url,
      headers: {'Authorization': 'Bearer $token'},
    );

    if (response.statusCode == 200) {
      final data = jsonDecode(response.body);
      setState(() {
        userName = data['data']['user']['name'];
      });
    }
  }

  Future<void> fetchChefs() async {
    final prefs = await SharedPreferences.getInstance();
    final token = prefs.getString('auth_token');

    if (token == null) {
      setState(() {
        isLoading = false;
        hasError = true;
      });
      print('Token não encontrado');
      return;
    }

    final url = Uri.parse('http://10.0.2.2:8080/api/chefs/');
    try {
      final response = await http.get(
        url,
        headers: {
          'Authorization': 'Bearer $token',
          'Content-Type': 'application/json',
        },
      );

      if (response.statusCode == 200) {
        final jsonResponse = json.decode(response.body);
        final List<dynamic> data = jsonResponse['data']['chefs'];

        setState(() {
          chefs =
              data.map<Map<String, String>>((chef) {
                return {
                  'id': chef['id'].toString(), // 👈 ID agora incluso
                  'name': chef['user']['name'],
                  'specialty': chef['specialization'] ?? '',
                  'image':
                      chef['user']['profile_photo'] ?? '', // pode ser uma URL
                };
              }).toList();
          isLoading = false;
          hasError = false;
        });
      } else {
        throw Exception('Erro de status ${response.statusCode}');
      }
    } catch (e) {
      setState(() {
        isLoading = false;
        hasError = true;
      });
      print('Erro ao buscar chefs: $e');
    }
  }

  Widget buildShimmerCard() {
    return ListView.builder(
      itemCount: 3,
      itemBuilder:
          (context, index) => Card(
            margin: EdgeInsets.symmetric(horizontal: 10, vertical: 8),
            child: ListTile(
              leading: Shimmer.fromColors(
                baseColor: Colors.grey.shade300,
                highlightColor: Colors.grey.shade100,
                child: CircleAvatar(radius: 30),
              ),
              title: Shimmer.fromColors(
                baseColor: Colors.grey.shade300,
                highlightColor: Colors.grey.shade100,
                child: Container(
                  height: 14,
                  color: Colors.grey,
                  margin: EdgeInsets.only(bottom: 5),
                ),
              ),
              subtitle: Shimmer.fromColors(
                baseColor: Colors.grey.shade300,
                highlightColor: Colors.grey.shade100,
                child: Container(height: 10, width: 100, color: Colors.grey),
              ),
            ),
          ),
    );
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
      drawer: Drawer(
        child: ListView(
          padding: EdgeInsets.zero,
          children: [
            DrawerHeader(
              decoration: BoxDecoration(color: Colors.orange),
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    'Bem-vindo,',
                    style: TextStyle(color: Colors.white70, fontSize: 16),
                  ),
                  Text(
                    userName ?? 'Usuário',
                    style: TextStyle(
                      color: Colors.white,
                      fontSize: 22,
                      fontWeight: FontWeight.bold,
                    ),
                  ),
                ],
              ),
            ),
            ListTile(
              leading: Icon(Icons.settings),
              title: Text('Editar Perfil'),
              onTap: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(
                    builder: (context) => UserProfileEditPage(),
                  ),
                );
              },
            ),
            ListTile(
              leading: Icon(Icons.wechat),
              title: Text('Conversas'),
              onTap: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(
                    builder: (context) => ChatRecords(),
                  ),
                );
              },
            ),
            ListTile(
              leading: Icon(Icons.logout),
              title: Text('Sair'),
              onTap: () => _logout(context),
            ),
          ],
        ),
      ),
      body:
          isLoading
              ? buildShimmerCard()
              : hasError
              ? Center(
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    Icon(Icons.error_outline, color: Colors.red, size: 40),
                    SizedBox(height: 10),
                    Text(
                      'Erro ao carregar os chefs.\nTente novamente mais tarde.',
                      textAlign: TextAlign.center,
                      style: TextStyle(fontSize: 16),
                    ),
                    SizedBox(height: 20),
                    ElevatedButton(
                      onPressed: () {
                        setState(() {
                          isLoading = true;
                          hasError = false;
                        });
                        fetchChefs();
                      },
                      child: Text("Tentar novamente"),
                    ),
                  ],
                ),
              )
              : chefs.isEmpty
              ? Center(
                child: Text(
                  "Nenhum chef disponível no momento.",
                  style: TextStyle(fontSize: 16),
                ),
              )
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
                              backgroundImage:
                                  chefs[index]['image']!.startsWith('http')
                                      ? NetworkImage(chefs[index]['image']!)
                                      : AssetImage(chefs[index]['image']!)
                                          as ImageProvider,
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
                                      (context) =>
                                          ChefDetailPage(chef: chefs[index]),
                                ),
                              );
                            },
                          ),
                        );
                      },
                    ),
                  ),
                  SizedBox(height: 10),
                ],
              ),
    );
  }

  void _logout(BuildContext context) async {
    final prefs = await SharedPreferences.getInstance();
    await prefs.remove('auth_token');
    await prefs.remove('user_id');
    Navigator.pushAndRemoveUntil(
      context,
      MaterialPageRoute(builder: (context) => LoginPage()),
      (route) => false,
    );
  }
}
