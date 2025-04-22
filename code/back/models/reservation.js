const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Chef = require("./chef");

const Reservation = sequelize.define('reservation', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'A Descrição do Agendamento não deve estar vazia'
      },
      notNull: {
        msg: 'A Descrição do Agendamento é obrigatória'
      },
    }
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'O telefone de contato não deve estar vazio'
      },
      notNull: {
        msg: 'O telefone de contato é obrigatória'
      },
    }
  },
  chef: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Chef,
      key: 'id'
    },
    validate: {
      notNull: { msg: 'É necessário selecionar um chef para o agendamento' }
    }
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'É obrigatório informar a data do agendamento'
      },
      notNull: {
        msg: 'É obrigatório informar a data do agendamento'
      },
    }
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'É obrigatório informar o endereço do agendamento'
      },
      notNull: {
        msg: 'É obrigatório informar o endereço do agendamento'
      },
    }
  },
  guests: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'É obrigatório informar o número de convidados'
      },
      notNull: {
        msg: 'É obrigatório informar o número de convidados'
      },
    }
  },
  notes: {
    type: DataTypes.STRING,
    allowNull: true
  },
  mealType: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

Chef.hasMany(Reservation, { foreignKey: 'chefId' });
Reservation.belongsTo(Chef, { foreignKey: 'chefId' });

module.exports = Reservation;
