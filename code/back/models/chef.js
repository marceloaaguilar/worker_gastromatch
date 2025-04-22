const {DataTypes} = require('sequelize');
const sequelize = require('../config/database');

const Chef = sequelize.define('Chef', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
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
      notNull: {
        msg: 'A experiência é obrigatória'
      },
    }
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'users',
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  }
},
  {
    timestamps: true,
    underscored: true,
  },
);

Chef.associate = (models) => {
  Chef.belongsTo(models.User, {
    foreignKey: 'user_id',
    as: 'user'
  });
};

Chef.sync({ force: false });

Chef.beforeCreate(async (chef, options) => {
  const User = require('../models/user');
  const user = await User.findByPk(chef.user_id);

  if (!user) {
    throw new Error('Usuário associado não existe');
  }
});

Chef.findAll({
  attributes: { exclude: ['password'] }
});

Chef.findOne({
  attributes: { exclude: ['password'] }
});

module.exports = Chef; 