require('dotenv').config();
const express = require("express");
const userRoutes = require('./routes/users.js');
const chefRoutes = require('./routes/chefs.js');
const cors = require('cors');

const app = express();


app.use(express.json());
app.use(cors());

app.use("/api/users", userRoutes);
app.use("/api/chefs", chefRoutes);
app.listen(process.env.SERVER_PORT || 8080); 