import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';
import 'package:shared_preferences/shared_preferences.dart';
import '../input.dart';
//pages
import 'HomePage.dart';
import 'LoginPage(não utilizado).dart';
import 'TermsPage.dart';

enum RoleTipe { cliente, chef }

class RegisterPage extends StatefulWidget {
  const RegisterPage() : super();

  @override
  _RegisterPageState createState() => _RegisterPageState();
}

class _RegisterPageState extends State<RegisterPage> {
  final TextEditingController _emailController = TextEditingController();
  final TextEditingController _passwordController = TextEditingController();
  final TextEditingController _passwordConfirmationController =
      TextEditingController();
  RoleTipe? userRole;
  bool roleClient = false;
  bool roleChef = false;
  bool agreeWithTermsAndConditions = false;
  bool _isLoading = false;
  String? _error;

  void role() {
    if (roleClient) {
      userRole = RoleTipe.cliente;
    }
    if (roleChef) {
      userRole = RoleTipe.chef;
    }
  }

  Future<void> register() async {
    setState(() {
      _isLoading = true;
      _error = null;
    });

    try {
      final url = Uri.parse('http://10.0.2.2:8080/api/users/signin');
      final response = await http.post(
        url,
        headers: {'Content-Type': 'application/json'},
        body: jsonEncode({
          'email': _emailController.text,
          'password': _passwordController.text,
        }),
      );

      print("Status: ${response.statusCode}");
      print("Body: ${response.body}");

      if (response.statusCode == 200) {
        final data = jsonDecode(response.body);
        final token = data['token'];

        final prefs = await SharedPreferences.getInstance();
        await prefs.setString('auth_token', token);

        Navigator.pushReplacement(
          context,
          MaterialPageRoute(builder: (context) => HomePage()),
        );
      }
    } catch (e) {
      print("Erro ao fazer login: $e");
      setState(() {
        _error = 'Erro ao conectar com o servidor';
      });
    } finally {
      setState(() {
        _isLoading = false;
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Cadastro')),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          children: [
            Row(
              mainAxisSize: MainAxisSize.min,
              children: [
                CustomCheckbox(
                  label: Text("Cliente", style: TextStyle(color: Colors.grey)),
                  value: roleClient,
                  onChanged:
                      (checked) => setState(() {
                        roleClient = checked ?? true;
                        roleChef = !(checked ?? false);
                        role();
                      }),
                ),
                CustomCheckbox(
                  label: Text("Chef", style: TextStyle(color: Colors.grey)),
                  value: roleChef,
                  onChanged:
                      (checked) => setState(() {
                        roleChef = checked ?? true;
                        roleClient = !(checked ?? false);
                        role();
                      }),
                ),
              ],
            ),
            CustomInputField(
              keyboardType: TextInputType.emailAddress,
              hintText: "Email",
              controller: _emailController,
              validator: (String? email) {
                if (email == null) {
                  return null;
                }
                bool emailValid = RegExp(
                  r"^[a-zA-Z0-9.a-zA-Z0-9.!#$%&'*+-/=?^_`{|}~]+@[a-zA-Z0-9]+\.[a-zA-Z]+",
                ).hasMatch(email);
                return emailValid ? null : "Email não é valido";
              },
            ),
            SizedBox(height: 15),
            CustomInputField(
              keyboardType: TextInputType.visiblePassword,
              hintText: "Senha",
              obscureText: true,
              controller: _passwordController,
              validator: (String? password) {
                if (password == null) {
                  return null;
                }
                if (password.length < 6) {
                  return "Senha é muito curta (mínimo 6 caracteres)";
                }
              },
            ),
            SizedBox(height: 15),
            CustomInputField(
              keyboardType: TextInputType.visiblePassword,
              hintText: "Confirme sua senha",
              obscureText: true,
              controller: _passwordConfirmationController,
              validator: (String? password) {
                if (password == null) {
                  return null;
                }
                if (password != _passwordConfirmationController.value.text) {
                  return "As senhas são diferentes";
                }
              },
            ),
            SizedBox(height: 15),
            CustomCheckbox(
              label: Row(
                mainAxisSize: MainAxisSize.min,
                children: [
                  Text("Aceito os", style: TextStyle(color: Colors.grey)),
                  TextButton(
                    child: Text('Termos e Condições'),
                    style: TextButton.styleFrom(
                      foregroundColor: Colors.orange,
                      padding: EdgeInsets.only(left: 4),
                    ),
                    onPressed: () {
                      Navigator.push(
                        context,
                        MaterialPageRoute(builder: (context) => TermsPage()),
                      );
                    },
                  ),
                ],
              ),
              value: agreeWithTermsAndConditions,
              onChanged:
                  (checked) => setState(
                    () => agreeWithTermsAndConditions = checked ?? false,
                  ),
            ),
            SizedBox(height: 20),
            _isLoading
                ? CircularProgressIndicator(color: Colors.orange)
                : ElevatedButton(
                  onPressed: register,
                  child: Text('Cadastrar'),
                  style: ElevatedButton.styleFrom(
                    backgroundColor: Colors.orange,
                    foregroundColor: Colors.white,
                  ),
                ),
            Expanded(child: Container()),
            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              mainAxisSize: MainAxisSize.max,
              children: [
                Text("Já tem uma conta?", style: TextStyle(color: Colors.grey)),
                TextButton(
                  child: Text("Entrar"),
                  style: TextButton.styleFrom(foregroundColor: Colors.orange),
                  onPressed: () {
                    Navigator.pushReplacement(
                      context,
                      MaterialPageRoute(builder: (context) => LoginPage()),
                    );
                  },
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }
}
