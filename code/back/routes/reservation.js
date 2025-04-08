const express = require("express");
const router = express.Router();

const ReservationController = require("../controllers/ReservationController");

router.post("/", ReservationController.createReservation);

module.exports = router;
