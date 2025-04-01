const {DataTypes} = require('sequelize');
const sequelize = require('../config/database');
const bcrypt = require('bcryptjs');

const Chef = sequelize.define('Chef', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty:{
        msg: 'O nome do chef não deve estar vazio'
      },
      notNull: {
        msg: 'O nome do chef é obrigatório'
      },
    }
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: {
      args: true,
      msg: 'O e-mail já está em uso'
    },
    validate: {
      isEmail: {
        msg: 'Por favor, forneça um endereço de e-mail válido',
      },
      notEmpty: {
        msg: 'O e-mail do chef não deve estar vazio'
      },
      notNull: {
        msg: 'O e-mail do chef é obrigatório'
      },
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    select: false,
    validate: {
      len: {
        args: [3, 255],
        msg: 'A senha deve ter pelo menos 3 caracteres',
      },
      notNull: {
        msg: 'A senha é obrigatória'
      },
    }
  },
  specialization: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'A especialização não deve estar vazia'
      },
      notNull: {
        msg: 'A especialização é obrigatória'
      },
    }
  },
  experience: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: {
        args: [0],
        msg: 'A experiência não pode ser negativa'
      },
      notNull: {
        msg: 'A experiência é obrigatória'
      },
    }
  },
  rating: {
    type: DataTypes.FLOAT,
    allowNull: true,
    defaultValue: 0,
    validate: {
      min: {
        args: [0],
        msg: 'A avaliação não pode ser negativa'
      },
      max: {
        args: [5],
        msg: 'A avaliação não pode ser maior que 5'
      }
    }
  }
},
  {
    timestamps: true,
    tableName: 'chefs',
    schema: 'public',
    underscored: true,
  },
);

Chef.beforeCreate((async (chef) => {
  if (chef.password) {
    chef.password = await bcrypt.hash(chef.password, 12);
  }
}));

Chef.findAll({
  attributes: { exclude: ['password'] }
});

Chef.findOne({
  attributes: { exclude: ['password'] }
});

module.exports = Chef; 