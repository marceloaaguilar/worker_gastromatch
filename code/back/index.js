require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');

const userRoutes = require('./routes/users.js');
// const chefRoutes = require('./routes/chefs.js');
const reservationRoutes = require("./routes/reservation.js");
const availabilityRoutes = require("./routes/availability.js");

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

// Conexão com MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Erro ao conectar no MongoDB:"));
db.once("open", () => {
  console.log("Conexão com MongoDB estabelecida.");
});

// Rotas
app.use("/api/users", userRoutes);
app.use("/api/reservation", reservationRoutes);
app.use("/api/availability", availabilityRoutes);

// Inicializa servidor
const PORT = process.env.SERVER_PORT || 8080;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
