import 'package:flutter_test/flutter_test.dart';
import 'package:gastromatch_mobile/models/reservation.dart';

void main() {
  group('Reservation Model', () {
    test('fromJson creates a valid Reservation object with expected values', () {
      final json = {
        'id': 101,
        'date': '2025-06-10',
        'time': '18:30',
        'user_id': 1,
        'chef_id': 5,
      };

      final reservation = Reservation.fromJson(json);

      expect(reservation.id, 101);
      expect(reservation.date, '2025-06-10');
      expect(reservation.time, '18:30');
      expect(reservation.userId, 1);
      expect(reservation.chefId, 5);
    });
  });
}
