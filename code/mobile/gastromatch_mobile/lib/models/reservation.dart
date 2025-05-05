class Reservation {
  final int id;
  final String date;
  final String time;
  final int userId;
  final int chefId;

  Reservation({
    required this.id,
    required this.date,
    required this.time,
    required this.userId,
    required this.chefId,
  });

  factory Reservation.fromJson(Map<String, dynamic> json) {
    return Reservation(
      id: json['id'],
      date: json['date'],
      time: json['time'],
      userId: json['user_id'],
      chefId: json['chef_id'],
    );
  }
}
