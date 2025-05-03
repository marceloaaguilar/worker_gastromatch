require('dotenv').config();
const express = require("express");
const userRoutes = require('./routes/users.js');
const chefRoutes = require('./routes/chefs.js');
const reservationRoutes = require('./routes/reservations.js');
const cors = require('cors');
const db = require('./models');
const cookieParser = require('cookie-parser');

const app = express();
app.use(cookieParser());

app.use(express.json());

app.use(cors({origin: process.env.VITE_API_URL, credentials: true,}));

app.use("/api/users", userRoutes);
app.use("/api/chefs", chefRoutes);
app.use("/api/reservations", reservationRoutes);
app.listen(process.env.SERVER_PORT || 8080); 