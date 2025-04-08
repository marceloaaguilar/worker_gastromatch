const mongoose = require("mongoose");

const reservationSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  chef: String,
  dateTime: Date,
  location: String,
  guests: Number,
  mealType: String,
  restrictions: [String],
  notes: String,
  paymentMethod: String
});

const Reservation = mongoose.model("Reservation", reservationSchema);

module.exports.model = Reservation;
module.exports.schema = reservationSchema;
