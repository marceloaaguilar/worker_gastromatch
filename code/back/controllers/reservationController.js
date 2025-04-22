const Reservation = require('../models/reservation.js');
const catchAsync = require('../utils/catchAsync.js');

exports.getAllReservations = catchAsync(async (req, res, next) => {
  const reservations = await Reservation.findAll();
  res.status(200).json({
    status: 'success',
    results: reservations.length,
    data: {
      reservations
    }
  });
});

exports.getReservation = catchAsync(async (req, res, next) => {
  const reservation = await Reservation.findByPk(req.params.id);
  if (!reservation) {
    return res.status(404).json({
      status: 'fail',
      message: 'Reserva não encontrada'
    });
  }
  res.status(200).json({
    status: 'success',
    data: {
      reservation
    }
  });
});

exports.createReservation = catchAsync(async (req, res, next) => {
  try {
    const newReservation = await Reservation.create(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        reservation: newReservation
      }
    });
  } catch (error) {
    return res.status(400).json({
      status: 'fail',
      message: 'Erro ao criar a reserva',
      errors: error.errors?.map((e) => e.message) || error.message
    });
  }
});

exports.updateReservation = catchAsync(async (req, res, next) => {
  const reservation = await Reservation.findByPk(req.params.id);
  if (!reservation) {
    return res.status(404).json({
      status: 'fail',
      message: 'Reserva não encontrada para atualização'
    });
  }

  await reservation.update(req.body);
  res.status(200).json({
    status: 'success',
    data: {
      reservation
    }
  });
});

exports.deleteReservation = catchAsync(async (req, res, next) => {
  const reservation = await Reservation.findByPk(req.params.id);
  if (!reservation) {
    return res.status(404).json({
      status: 'fail',
      message: 'Reserva não encontrada para exclusão'
    });
  }

  await reservation.destroy();
  res.status(204).json({
    status: 'success',
    data: null
  });
});
