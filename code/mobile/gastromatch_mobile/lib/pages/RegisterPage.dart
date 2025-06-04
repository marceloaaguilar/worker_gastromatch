import 'dart:convert';
import 'dart:io';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'package:image_picker/image_picker.dart';
import 'package:shared_preferences/shared_preferences.dart';

import '../input.dart';
import 'LoginPage.dart';
import 'TermsPage.dart';
import 'RegisterChefPage.dart';

enum RoleTipe { cliente, chef }

class RegisterPage extends StatefulWidget {
  const RegisterPage({super.key});

  @override
  _RegisterPageState createState() => _RegisterPageState();
}

class _RegisterPageState extends State<RegisterPage> {
  final TextEditingController _nameController = TextEditingController();
  final TextEditingController _emailController = TextEditingController();
  final TextEditingController _phoneController = TextEditingController();
  final TextEditingController _addressController = TextEditingController();
  final TextEditingController _passwordController = TextEditingController();
  final TextEditingController _passwordConfirmationController =
      TextEditingController();

  bool roleClient = false;
  bool roleChef = false;
  bool agreeWithTermsAndConditions = false;
  bool _isLoading = false;
  String? _error;
  File? _profilePhoto;

  final ImagePicker _picker = ImagePicker();

  Future<void> _pickPhoto() async {
    final picked = await _picker.pickImage(source: ImageSource.gallery);
    if (picked != null) {
      setState(() {
        _profilePhoto = File(picked.path);
      });
    }
  }

  Future<void> register() async {
    setState(() {
      _isLoading = true;
      _error = null;
    });

    try {
      final uri = Uri.parse('http://10.0.2.2:8080/api/users/signup');
      final request = http.MultipartRequest('POST', uri);

      request.fields['name'] = _nameController.text;
      request.fields['email'] = _emailController.text;
      request.fields['phone'] = _phoneController.text;
      request.fields['address'] = _addressController.text;
      request.fields['password'] = _passwordController.text;
      request.fields['role'] = roleClient ? 'CUSTOMER' : 'PROFESSIONAL';

      if (_profilePhoto != null) {
        request.files.add(
          await http.MultipartFile.fromPath(
            'profile_photo',
            _profilePhoto!.path,
          ),
        );
      }

      final response = await request.send();
      final responseBody = await http.Response.fromStream(response);

      print('Status: ${response.statusCode}');
      print('Body: ${responseBody.body}');

      if (response.statusCode == 200 || response.statusCode == 201) {
        final responseData = jsonDecode(responseBody.body);

        if (responseData['status'] == 'success') {
          final token = responseData['token'];
          final userData = responseData['data'];

          final prefs = await SharedPreferences.getInstance();
          await prefs.setString('auth_token', token);
          await prefs.setString('user_email', userData['email']);
          await prefs.setString('user_name', userData['name']);
          await prefs.setString('user_role', userData['role']);

          if (userData['profile_photo'] != null) {
            await prefs.setString('profile_photo', userData['profile_photo']);
          }

          final scaffoldMessenger = ScaffoldMessenger.of(context);
          scaffoldMessenger.showSnackBar(
            SnackBar(
              content: Text('Cadastro realizado com sucesso!'),
              backgroundColor: Colors.green,
              duration: Duration(seconds: 2),
            ),
          );

          Future.delayed(Duration(seconds: 2), () {
            if (mounted) {
              if (roleChef) {
                Navigator.pushReplacement(
                  context,
                  MaterialPageRoute(
                    builder: (context) => RegisterChefPage(userId: userData['id'].toString())
                  )
                );
              } else {
                Navigator.pushReplacement(
                  context,
                  MaterialPageRoute(builder: (context) => LoginPage()),
                );
              }
            }
          });
        } else {
          setState(() {
            _error = 'Erro: resposta inesperada do servidor';
          });
        }
      } else {
        setState(() {
          _error = 'Erro: ${responseBody.body}';
        });
      }
    } catch (e) {
      print("Erro ao cadastrar: $e");
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
            if (_error != null)
              Text(_error!, style: TextStyle(color: Colors.red)),
            CustomInputField(
              hintText: "Nome",
              controller: _nameController,
              validator: (_) => null,
            ),
            SizedBox(height: 15),
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
                      }),
                ),
                CustomCheckbox(
                  label: Text("Chef", style: TextStyle(color: Colors.grey)),
                  value: roleChef,
                  onChanged:
                      (checked) => setState(() {
                        roleChef = checked ?? true;
                        roleClient = !(checked ?? false);
                      }),
                ),
              ],
            ),
            CustomInputField(
              keyboardType: TextInputType.emailAddress,
              hintText: "Email",
              controller: _emailController,
              validator: (_) => null,
            ),
            SizedBox(height: 15),
            CustomInputField(
              hintText: "Telefone",
              controller: _phoneController,
              keyboardType: TextInputType.phone,
              validator: (_) => null,
            ),
            SizedBox(height: 15),
            CustomInputField(
              hintText: "Endereço",
              controller: _addressController,
              validator: (_) => null,
            ),
            SizedBox(height: 15),
            CustomInputField(
              hintText: "Senha",
              obscureText: true,
              controller: _passwordController,
              validator: (_) => null,
            ),
            SizedBox(height: 15),
            CustomInputField(
              hintText: "Confirme sua senha",
              obscureText: true,
              controller: _passwordConfirmationController,
              validator: (_) => null,
            ),
            SizedBox(height: 15),
            Row(
              children: [
                ElevatedButton(
                  onPressed: _pickPhoto,
                  child: Text("Selecionar Foto"),
                  style: ElevatedButton.styleFrom(
                    backgroundColor: Colors.grey[300],
                    foregroundColor: Colors.black,
                  ),
                ),
                if (_profilePhoto != null)
                  Padding(
                    padding: const EdgeInsets.only(left: 10),
                    child: Text(
                      "Foto selecionada",
                      style: TextStyle(color: Colors.grey),
                    ),
                  ),
              ],
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
