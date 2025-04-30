import 'dart:convert';
import 'dart:io';
import 'package:flutter/material.dart';
import 'package:image_picker/image_picker.dart';
import 'package:http/http.dart' as http;
import 'package:shared_preferences/shared_preferences.dart';

import '../input.dart';
import 'HomePage.dart';

class UserProfileEditPage extends StatefulWidget {
  @override
  _UserProfileEditPageState createState() => _UserProfileEditPageState();
}

class _UserProfileEditPageState extends State<UserProfileEditPage> {
  final TextEditingController _nameController = TextEditingController();
  final TextEditingController _emailController = TextEditingController();
  final TextEditingController _phoneController = TextEditingController();
  final TextEditingController _addressController = TextEditingController();
  File? _profilePhoto;
  bool _isLoading = false;
  String? _error;
  int? _userId;
  String? _currentPhotoUrl;

  final ImagePicker _picker = ImagePicker();

  @override
  void initState() {
    super.initState();
    fetchUserData();
  }

  Future<void> fetchUserData() async {
    final prefs = await SharedPreferences.getInstance();
    _userId = prefs.getInt('user_id');
    final token = prefs.getString('auth_token');

    if (_userId == null || token == null) {
      setState(() => _error = 'Usuário não autenticado.');
      return;
    }

    final uri = Uri.parse('http://10.0.2.2:8080/api/users/$_userId');
    final response = await http.get(uri, headers: {
      'Authorization': 'Bearer $token',
      'Content-Type': 'application/json',
    });

    if (response.statusCode == 200) {
      final data = jsonDecode(response.body);
      final user = data['data']['user'];
      setState(() {
        _nameController.text = user['name'] ?? '';
        _emailController.text = user['email'] ?? '';
        _phoneController.text = user['phone'] ?? '';
        _addressController.text = user['address'] ?? '';
        _currentPhotoUrl = user['profile_photo'];
      });
    } else {
      setState(() => _error = 'Erro ao carregar dados do usuário.');
    }
  }

  Future<void> _pickPhoto() async {
    final picked = await _picker.pickImage(source: ImageSource.gallery);
    if (picked != null) {
      setState(() {
        _profilePhoto = File(picked.path);
      });
    }
  }

  Future<void> updateProfile() async {
    setState(() {
      _isLoading = true;
      _error = null;
    });

    try {
      final prefs = await SharedPreferences.getInstance();
      final token = prefs.getString('auth_token');

      if (_userId == null || token == null) {
        setState(() {
          _error = 'Usuário não autenticado.';
          _isLoading = false;
        });
        return;
      }

      final uri = Uri.parse('http://10.0.2.2:8080/api/users/$_userId');
      final request = http.MultipartRequest('PATCH', uri);
      request.headers['Authorization'] = 'Bearer $token';

      request.fields['name'] = _nameController.text;
      request.fields['email'] = _emailController.text;
      request.fields['phone'] = _phoneController.text;
      request.fields['address'] = _addressController.text;

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
      final data = jsonDecode(responseBody.body);

      if (response.statusCode == 200 && data['status'] == 'success') {
        final user = data['data']['updatedUser'];

        await prefs.setString('user_name', user['name']);
        await prefs.setString('user_email', user['email']);
        await prefs.setString('user_phone', user['phone']);
        await prefs.setString('user_address', user['address']);

        if (user['profile_photo'] != null) {
          await prefs.setString('profile_photo', user['profile_photo']);
        }

        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(
            content: Text('Perfil atualizado com sucesso!'),
            backgroundColor: Colors.green,
          ),
        );

        Navigator.pushReplacement(
          context,
          MaterialPageRoute(builder: (context) => HomePage()),
        );
      } else {
        setState(() {
          _error = data['message'] ?? 'Erro ao atualizar perfil';
        });
      }
    } catch (e) {
      print('Erro: $e');
      setState(() {
        _error = 'Erro na comunicação com o servidor.';
      });
    } finally {
      setState(() => _isLoading = false);
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Editar Perfil')),
      body: SingleChildScrollView(
        padding: EdgeInsets.all(16),
        child: Column(
          children: [
            if (_error != null)
              Text(_error!, style: TextStyle(color: Colors.red)),
            GestureDetector(
              onTap: _pickPhoto,
              child: CircleAvatar(
                radius: 45,
                backgroundImage: _profilePhoto != null
                    ? FileImage(_profilePhoto!)
                    : (_currentPhotoUrl != null && _currentPhotoUrl!.isNotEmpty
                        ? NetworkImage(_currentPhotoUrl!) as ImageProvider
                        : null),
                child: (_profilePhoto == null && (_currentPhotoUrl == null || _currentPhotoUrl!.isEmpty))
                    ? Icon(Icons.person, size: 40, color: Colors.white)
                    : null,
                backgroundColor: Colors.orange.shade200,
              ),
            ),
            SizedBox(height: 20),
            CustomInputField(hintText: 'Nome', controller: _nameController, validator: (_) => null),
            SizedBox(height: 15),
            CustomInputField(hintText: 'Email', controller: _emailController, validator: (_) => null),
            SizedBox(height: 15),
            CustomInputField(hintText: 'Telefone', controller: _phoneController, validator: (_) => null),
            SizedBox(height: 15),
            CustomInputField(hintText: 'Endereço', controller: _addressController, validator: (_) => null),
            SizedBox(height: 30),
            _isLoading
                ? CircularProgressIndicator(color: Colors.orange)
                : ElevatedButton(
                    onPressed: updateProfile,
                    child: Text('Salvar Alterações'),
                    style: ElevatedButton.styleFrom(
                      backgroundColor: Colors.orange,
                      foregroundColor: Colors.white,
                    ),
                  ),
          ],
        ),
      ),
    );
  }
}
