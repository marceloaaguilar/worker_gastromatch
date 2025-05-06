import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';

import 'HomeChef.dart';
import 'HomeClient.dart';

class HomeRouter extends StatefulWidget {
  @override
  _HomeRouterState createState() => _HomeRouterState();
}

class _HomeRouterState extends State<HomeRouter> {
  String? userRole;

  @override
  void initState() {
    super.initState();
    _loadUserRole();
  }

  Future<void> _loadUserRole() async {
    final prefs = await SharedPreferences.getInstance();
    final role = prefs.getString('user_role');

    setState(() {
      userRole = role;
    });
  }

  @override
  Widget build(BuildContext context) {
    if (userRole == null) {
      return Scaffold(
        body: Center(child: CircularProgressIndicator()),
      );
    } else if (userRole == 'CUSTOMER') {
      return HomeClient();
    } else if (userRole == 'PROFESSIONAL') {
      return HomeChef();
    } else {
      return Scaffold(
        body: Center(child: Text('Tipo de usuário não reconhecido')),
      );
    }
  }
}
