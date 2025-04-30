import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';
import 'package:shared_preferences/shared_preferences.dart';
import '../input.dart';
//pages
import 'HomePage.dart';
import 'RegisterPage.dart';

class LoginPage extends StatefulWidget {
  @override
  _LoginPageState createState() => _LoginPageState();
}

class _LoginPageState extends State<LoginPage> {
  final TextEditingController _emailController = TextEditingController();
  final TextEditingController _passwordController = TextEditingController();
  bool rememberMeChecked = false;
  bool _isLoading = false;
  String? _error;

  Future<void> login() async {
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
      } else {
        setState(() {
          _error = 'Email ou senha incorretos';
        });
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
      appBar: AppBar(title: Text('Login')),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          children: [
            if (_error != null)
              Text(
                _error!,
                style: TextStyle(color: Colors.red),
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
                        r"^[a-zA-Z0-9.a-zA-Z0-9.!#$%&'*+-/=?^_`{|}~]+@[a-zA-Z0-9]+\.[a-zA-Z]+")
                    .hasMatch(email);
                return emailValid ? null : "Formato de email incorreto";
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
                  return "Senha mínima: 6 caractéres";
                }
              },
            ),
            SizedBox(height: 20),
            // CustomCheckbox(
            //   labelText: "Remember me",
            //   value: rememberMeChecked,
            //   onChanged: (checked) =>
            //       setState(() => rememberMeChecked = checked ?? false),
            // ),
            _isLoading
                ? CircularProgressIndicator(color: Colors.orange)
                : ElevatedButton(
                  onPressed: login,
                  style: ElevatedButton.styleFrom(
                    backgroundColor: Colors.orange,
                    foregroundColor: Colors.white,
                  ),
                  child: Text('Login'),
                ),
            Expanded(
              child: Container(),
            ),
            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              mainAxisSize: MainAxisSize.max,
              children: [
                Text(
                  "Não tem uma conta?",
                  style: TextStyle(
                    color: Colors.grey,
                  ),
                ),
                TextButton(
                    style: TextButton.styleFrom(
                      foregroundColor: Colors.orange,
                    ),
                    onPressed: () {
                      Navigator.pushReplacement(
                          context,
                          MaterialPageRoute(
                              builder: (context) => RegisterPage()));
                    },
                    child: Text("Registre-se")),
              ],
            )
          ],
        ),
      ),
    );
  }
}
