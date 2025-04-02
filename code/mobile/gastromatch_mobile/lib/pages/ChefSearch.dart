import 'package:flutter/material.dart';
//pages
import 'ChefDetailPage.dart';

class ChefSearch extends SearchDelegate {
  final List<Map<String, String>> chefs;
  ChefSearch(this.chefs);

  @override
  List<Widget> buildActions(BuildContext context) {
    return [
      IconButton(
        icon: Icon(Icons.clear),
        onPressed: () {
          query = '';
        },
      ),
    ];
  }

  @override
  Widget buildLeading(BuildContext context) {
    return IconButton(
      icon: Icon(Icons.arrow_back),
      onPressed: () {
        close(context, null);
      },
    );
  }

  @override
  Widget buildResults(BuildContext context) {
    return buildSuggestions(context);
  }

  @override
  Widget buildSuggestions(BuildContext context) {
    final List<Map<String, String>> filteredChefs = chefs.where((chef) {
      return chef['name']!.toLowerCase().contains(query.toLowerCase());
    }).toList();

    return ListView.builder(
      itemCount: filteredChefs.length,
      itemBuilder: (context, index) {
        return ListTile(
          title: Text(filteredChefs[index]['name']!),
          subtitle: Text(filteredChefs[index]['specialty']!),
          onTap: () {
            close(context, null);
            Navigator.push(
              context,
              MaterialPageRoute(
                builder: (context) =>
                    ChefDetailPage(chef: filteredChefs[index]),
              ),
            );
          },
        );
      },
    );
  }
}
