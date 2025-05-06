import 'package:flutter/material.dart';
import 'dart:convert';
import 'package:flutter/services.dart' show rootBundle;
import 'package:shimmer/shimmer.dart';

import 'ChatPageClient.dart';

class ChatRecords extends StatefulWidget {
  @override
  _ChatRecordsState createState() => _ChatRecordsState();
}

class _ChatRecordsState extends State<ChatRecords> {
  List<dynamic> chatRecords = [];
  bool isLoading = true;
  bool hasError = false;

  @override
  void initState() {
    super.initState();
    loadChatRecords();
  }

  Future<void> loadChatRecords() async {
    await Future.delayed(Duration(seconds: 2)); // simulate loading time
    final String jsonString = await rootBundle.loadString('assets/records.json');
    final Map<String, dynamic> jsonData = json.decode(jsonString);
    setState(() {
      chatRecords = jsonData['records'];
      isLoading = false;
    });
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
  Widget buildChatList() {
    return ListView.builder(
      itemCount: chatRecords.length,
      itemBuilder: (context, index) {
        final record = chatRecords[index];
        final userName = record.keys.first;
        final messages = record[userName]['messages'];
        return Card(
          margin: EdgeInsets.symmetric(horizontal: 10, vertical: 8),
          child: ListTile(
            onTap: () {
              Navigator.push(
                context,
                MaterialPageRoute(
                  builder: (context) => ChatPageClient(
                    userName: userName,
                    messages: messages,
                  ),
                ),
              );
            },
            leading: CircleAvatar(
              radius: 30,
              child: Text(userName[0].toUpperCase()),
              backgroundColor: Colors.orange[200],
            ),
            title: Text(userName),
            subtitle: Text('${messages.length} mensagens'),
          ),
        );

      },
    );
  }
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Conversas')),
      body: isLoading ? buildShimmerCard() : buildChatList(),
    );
  }
}