import 'package:bubble/bubble.dart';
import 'package:flutter/material.dart';
import 'package:intl/intl.dart';

class ChatPageClient extends StatelessWidget {
  final String userName;
  final List<dynamic> messages;

  const ChatPageClient({
    Key? key,
    required this.userName,
    required this.messages,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    String? previousDate;

    return Scaffold(
      appBar: AppBar(title: Text(userName)),
      body: Column(
        children: [
          // Messages ##################
          Expanded(
            child: ListView.builder(
              padding: EdgeInsets.all(10),
              itemCount: messages.length + 1,
              itemBuilder: (context, index) {
                if (index == messages.length) {
                  return SizedBox(height: 10);
                }

                final message = messages[index];
                final isClient = message['user'] == 'client';
                final currentDate = message['date'];
                final showDateDivider = currentDate != previousDate;
                previousDate = currentDate;

                return Column(
                  crossAxisAlignment: CrossAxisAlignment.stretch,
                  children: [
                    if (showDateDivider)
                      Padding(
                        padding: const EdgeInsets.symmetric(vertical: 10),
                        child: Row(
                          children: [
                            Expanded(child: Divider()),
                            Padding(
                              padding: const EdgeInsets.symmetric(
                                horizontal: 8.0,
                              ),
                              child: Text(
                                // DateFormat('dd/MM/y', 'pt_BR').format(DateTime.parse(currentDate)).toUpperCase(),
                                DateFormat('dd MMMM y', 'pt_BR')
                                    .format(DateTime.parse(currentDate))
                                    .toUpperCase(),
                                style: TextStyle(
                                  color: Colors.orange[700],
                                  fontWeight: FontWeight.w500,
                                ),
                              ),
                            ),
                            Expanded(child: Divider()),
                          ],
                        ),
                      ),
                    Bubble(
                      margin: BubbleEdges.only(top: 10),
                      alignment:
                          isClient ? Alignment.topRight : Alignment.topLeft,
                      nip: isClient ? BubbleNip.rightTop : BubbleNip.leftTop,
                      color: isClient ? Colors.orange[200] : Colors.grey[300],
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text(
                            message['message'],
                            style: TextStyle(fontSize: 16),
                          ),
                          SizedBox(height: 4),
                          Align(
                            alignment:
                                isClient
                                    ? Alignment.centerRight
                                    : Alignment.centerLeft,
                            child: Text(
                              message['time'],
                              style: TextStyle(
                                fontSize: 12,
                                color: Colors.grey[600],
                              ),
                            ),
                          ),
                        ],
                      ),
                    ),
                  ],
                );
              },
            ),
          ),
          // FOOTER ##################
          Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              Container(
                padding: EdgeInsets.fromLTRB(10, 8, 10, 13),
                decoration: BoxDecoration(
                  color: Colors.grey[300],
                  border: Border(top: BorderSide(color: Colors.grey.shade400)),
                ),
                child: Row(
                  children: [
                    Expanded(
                      child: TextField(
                        decoration: InputDecoration(
                          hintText: "Digite sua mensagem...",
                          filled: true,
                          fillColor: Colors.white,
                          contentPadding: EdgeInsets.symmetric(
                            horizontal: 16,
                            vertical: 12,
                          ),
                          border: OutlineInputBorder(
                            borderRadius: BorderRadius.circular(24),
                            borderSide: BorderSide.none,
                          ),
                        ),
                      ),
                    ),
                    SizedBox(width: 8),
                    CircleAvatar(
                      backgroundColor: Colors.orange[400],
                      child: Icon(Icons.send, color: Colors.white),
                    ),
                  ],
                ),
              ),
            ],
          ),
        ],
      ),
    );
  }
}
