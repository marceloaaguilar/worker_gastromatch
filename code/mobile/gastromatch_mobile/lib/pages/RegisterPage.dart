// ignore_for_file: body_might_complete_normally_nullable

import 'package:flutter/material.dart';
import '../input.dart';
//pages
import 'HomePage.dart';
import 'TermsPage.dart';

class RegisterPage extends StatefulWidget {
  const RegisterPage() : super();
  @override
  _RegisterPageState createState() => _RegisterPageState();
}

class _RegisterPageState extends State<RegisterPage> {
  final TextEditingController emailController = TextEditingController();
  final TextEditingController passwordController = TextEditingController();
  final TextEditingController passwordConfirmationController =
      TextEditingController();
  bool agreeWithTermsAndConditions = false;

  Future<void> register() async {
    /*
    try {
      await _auth.createUserWithEmailAndPassword(
        email: emailController.text,
        password: passwordController.text,
      );
      Navigator.pushReplacement(
          context, MaterialPageRoute(builder: (context) => HomePage()));
    } catch (e) {
      ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(content: Text('Registration Failed: ${e.toString()}')));
    }
    */
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Cadastro')),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          children: [
            CustomInputField(
              keyboardType: TextInputType.emailAddress,
              hintText: "Email",
              controller: emailController,
              validator: (String? email) {
                if (email == null) {
                  return null;
                }
                bool emailValid = RegExp(
                        r"^[a-zA-Z0-9.a-zA-Z0-9.!#$%&'*+-/=?^_`{|}~]+@[a-zA-Z0-9]+\.[a-zA-Z]+")
                    .hasMatch(email);
                return emailValid ? null : "Email não é valido";
              },
            ),
            SizedBox(height: 15),
            CustomInputField(
              keyboardType: TextInputType.visiblePassword,
              hintText: "Senha",
              obscureText: true,
              controller: passwordController,
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
              controller: passwordConfirmationController,
              validator: (String? password) {
                if (password == null) {
                  return null;
                }
                if (password != passwordConfirmationController.value.text) {
                  return "As senhas são diferentes";
                }
              },
            ),
            SizedBox(height: 15),
            CustomCheckbox(
              label: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Padding(
                    padding: EdgeInsets.only(left: 8),
                    child: Text(
                      "Aceito os",
                      style: TextStyle(
                        color: Colors.grey,
                      ),
                    ),
                  ),
                  TextButton(
                    child: Text('Termos e Condições'),
                    style: TextButton.styleFrom(
                      foregroundColor: Colors.orange,
                    ),
                    onPressed: () {
                      Navigator.push(
                        context,
                        MaterialPageRoute(
                          builder: (context) => TermsPage(),
                        ),
                      );
                    },
                  ),
                ],
              ),
              value: agreeWithTermsAndConditions,
              onChanged: (checked) => setState(
                  () => agreeWithTermsAndConditions = checked ?? false),
            ),
            SizedBox(height: 20),
            ElevatedButton(
              onPressed: register,
              child: Text('Cadastrar'),
              style: ElevatedButton.styleFrom(
                backgroundColor: Colors.orange,
                foregroundColor: Colors.white,
              ),
            ),
            Expanded(
              child: Container(),
            ),
            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              mainAxisSize: MainAxisSize.max,
              children: [
                Text(
                  "Já tem uma conta?",
                  style: TextStyle(
                    color: Colors.grey,
                  ),
                ),
                TextButton(
                    child: Text("Entrar"),
                    style: TextButton.styleFrom(
                      foregroundColor: Colors.orange,
                    ),
                    onPressed: () {
                      Navigator.push(
                          context,
                          MaterialPageRoute(
                              builder: (context) => RegisterPage()));
                    }),
              ],
            )
          ],
        ),
      ),
    );
  }
}
