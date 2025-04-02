// ignore_for_file: body_might_complete_normally_nullable

import 'package:flutter/material.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:google_sign_in/google_sign_in.dart';
import '../input.dart';
//pages
import 'HomePage.dart';
import 'RegisterPage.dart';

class LoginPage extends StatefulWidget {
  const LoginPage() : super();

  @override
  _LoginPageState createState() => _LoginPageState();
}

class _LoginPageState extends State<LoginPage> {
  final TextEditingController emailController = TextEditingController();
  final TextEditingController passwordController = TextEditingController();
  final FirebaseAuth _auth = FirebaseAuth.instance;
  bool rememberMeChecked = false;

  Future<void> login() async {
    try {
      await _auth.signInWithEmailAndPassword(
        email: emailController.text,
        password: passwordController.text,
      );
      Navigator.pushReplacement(
          context, MaterialPageRoute(builder: (context) => HomePage()));
    } catch (e) {
      ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(content: Text('Login Failed: ${e.toString()}')));
    }
  }

  Future<void> signInWithGoogle() async {
    try {
      final GoogleSignInAccount? googleUser = await GoogleSignIn().signIn();
      if (googleUser == null) return;

      final GoogleSignInAuthentication googleAuth =
          await googleUser.authentication;
      final AuthCredential credential = GoogleAuthProvider.credential(
        accessToken: googleAuth.accessToken,
        idToken: googleAuth.idToken,
      );

      await _auth.signInWithCredential(credential);
      Navigator.pushReplacement(
          context, MaterialPageRoute(builder: (context) => HomePage()));
    } catch (e) {
      ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(content: Text('Google Sign-In Failed: ${e.toString()}')));
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
            SizedBox(height: 20),
            CustomCheckbox(
              labelText: "Remember me",
              value: rememberMeChecked,
              onChanged: (checked) =>
                  setState(() => rememberMeChecked = checked ?? false),
            ),
            ElevatedButton(
              onPressed: login,
              style: ElevatedButton.styleFrom(
                backgroundColor: Colors.orange,
                foregroundColor: Colors.white,
              ),
              child: Text('Login'),
            ),
            ElevatedButton(
              onPressed: signInWithGoogle,
              style: ElevatedButton.styleFrom(
                backgroundColor: Colors.orange,
                foregroundColor: Colors.white,
              ),
              child: Text('Login com Google'),
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
                      Navigator.push(
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
