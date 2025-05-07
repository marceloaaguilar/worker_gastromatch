import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';
import 'package:shared_preferences/shared_preferences.dart';

import '../input.dart';
import 'HomeClient.dart';
import 'RegisterPage.dart';
import 'HomeRouter.dart';

class LoginPage extends StatefulWidget {
  @override
  _LoginPageState createState() => _LoginPageState();
}

class _LoginPageState extends State<LoginPage> {
  final TextEditingController _emailController = TextEditingController();
  final TextEditingController _passwordController = TextEditingController();
  bool _isLoading = false;
  String? _error;

  @override
  void dispose() {
    _emailController.dispose();
    _passwordController.dispose();
    super.dispose();
  }

  Future<void> login() async {
    FocusScope.of(context).unfocus();
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
        final user = data['user'];
        final userId = user['id'];
        final userRole = user['role'];

        final prefs = await SharedPreferences.getInstance();
        await prefs.setString('auth_token', token);
        await prefs.setInt('user_id', userId);
        await prefs.setString('user_role', userRole);

        Navigator.pushReplacement(
          context,
          MaterialPageRoute(builder: (context) => HomeRouter()),
        );
      } else {
        setState(() {
          _error = 'Email ou senha inválidos';
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
      appBar: AppBar(title: Text("Login")),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          children: [
            if (_error != null)
              Text(_error!, style: TextStyle(color: Colors.red)),
            CustomInputField(
              keyboardType: TextInputType.emailAddress,
              hintText: "Email",
              controller: _emailController,
              validator: (_) => null,
            ),
            SizedBox(height: 15),
            CustomInputField(
              keyboardType: TextInputType.visiblePassword,
              hintText: "Senha",
              obscureText: true,
              controller: _passwordController,
              validator: (_) => null,
            ),
            SizedBox(height: 20),
            _isLoading
                ? CircularProgressIndicator(color: Colors.orange)
                : ElevatedButton(
                  onPressed: login,
                  child: Text("Entrar"),
                  style: ElevatedButton.styleFrom(
                    backgroundColor: Colors.orange,
                    foregroundColor: Colors.white,
                  ),
                ),
            Expanded(child: Container()),
            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Text(
                  "Não tem uma conta?",
                  style: TextStyle(color: Colors.grey),
                ),
                TextButton(
                  child: Text("Cadastre-se"),
                  style: TextButton.styleFrom(foregroundColor: Colors.orange),
                  onPressed: () {
                    Navigator.pushReplacement(
                      context,
                      MaterialPageRoute(builder: (context) => RegisterPage()),
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
