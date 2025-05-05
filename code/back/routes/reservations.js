const express = require('express');
const reservationController = require('../controllers/reservationController');
const authController = require('./../controllers/authController');

const router = express.Router();

router
  .route('/')
  .get(authController.protect, reservationController.getAllReservations)   
  .post(authController.protect, reservationController.createReservation); 

router
  .route('/:id')
  .get(authController.protect, reservationController.getReservation)
  .patch(authController.protect, reservationController.updateReservation) 
  .delete(authController.protect, reservationController.deleteReservation);

router
  .route('/user/:id')
  .get(authController.protect, reservationController.getReservationByUser)

module.exports = router; 