require('dotenv').config();
const {Sequelize} = require('sequelize');

const DATABASE_NAME = process.env.DATABASE_NAME;
const HOST_DB = process.env.HOST_DB;
const USER_DB = process.env.USER_DB;
const PASSWORD_DB = process.env.PASSWORD_DB;
const PORT_DB = process.env.PORT_DB;

const sequelize = new Sequelize({
  dialect: 'mysql',
  host: HOST_DB,
  port: PORT_DB,
  database: DATABASE_NAME,
  username: USER_DB,
  password: PASSWORD_DB
});

async function setupDatabase() {
  try {
    await sequelize.sync({ force: false });
  } catch (error) {
    console.error("Erro ao sincronizar banco de dados: " + error)
  }
}

setupDatabase();

module.exports = sequelize