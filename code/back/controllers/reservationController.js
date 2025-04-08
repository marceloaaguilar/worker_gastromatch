const Day = require("../models/day").model;
const Reservation = require("../models/reservation").model;

const createReservation = (req, res) => {
  const {
    nome,
    email,
    telefone,
    chef,
    dataHorario,
    local,
    numConvidados,
    tipoRefeicao,
    restricoes,
    observacoes,
    metodoPagamento
  } = req.body;

  const date = new Date(dataHorario);

  Day.findOne({ date }, (err, day) => {
    if (err) {
      return res.status(500).send("Erro ao buscar o dia.");
    }

    if (!day) {
      return res.status(404).send("Dia não encontrado.");
    }

    const chefObj = day.chef.find(c => c._id.toString() === chef);
    if (!chefObj) {
      return res.status(404).send("Chef não encontrado para esta data.");
    }

    const reservation = new Reservation({
      name: nome,
      email,
      phone: telefone,
      chef,
      dateTime: date,
      location: local,
      guests: parseInt(numConvidados),
      mealType: tipoRefeicao,
      restrictions: restricoes,
      notes: observacoes,
      paymentMethod: metodoPagamento
    });

    chefObj.reservation = reservation;
    chefObj.isAvailable = false;

    day.save(err => {
      if (err) {
        return res.status(500).send("Erro ao salvar a reserva.");
      }
      res.status(200).send("Reserva registrada com sucesso.");
    });
  });
};

module.exports = {
  createReservation,
};

