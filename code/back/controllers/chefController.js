const Chef = require('../models/chef.js');
const User = require('../models/user.js');
const catchAsync = require('../utils/catchAsync.js');

exports.getAllChefs = catchAsync(async (req, res, next) => {

  const skip = parseInt(req.query.skip) || 0;
  const limit = parseInt(req.query.limit) || 10;

  const chefs = await Chef.findAll({
    include: {
      model: User,
      as: 'user',
      attributes: ['id','name', 'email', 'profile_photo']
    },
    limit: limit,
    offset: skip
  });
  
  res.status(200).json({
    status: 'success',
    results: chefs.length,
    data: {
      chefs
    }
  });
});

exports.getChef = catchAsync(async (req, res, next) => {
  const chef = await Chef.findByPk(req.params.id);
  if (!chef) {
    return res.status(404).json({
      status: 'fail',
      message: 'Chef não encontrado'
    });
  }
  res.status(200).json({
    status: 'success',
    data: {
      chef
    }
  });
});

exports.createChef = catchAsync(async (req, res, next) => {
  try {
    const newChef = await Chef.create(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        chef: newChef
      }
    });
  } catch (error) {
      return res.status(400).json({
        mensagem: "Ocorreu um erro ao realizar o cadastro",
        erro: error && error.errors? error.errors.map((e) => e.message) : error
    })
  }
});

exports.updateChef = catchAsync(async (req, res, next) => {
  const chef = await Chef.findByPk(req.params.id);
  if (!chef) {
    return res.status(404).json({
      status: 'fail',
      message: 'Chef não encontrado'
    });
  }
  await chef.update(req.body);
  res.status(200).json({
    status: 'success',
    data: {
      chef
    }
  });
});

exports.deleteChef = catchAsync(async (req, res, next) => {
  const chef = await Chef.findByPk(req.params.id);
  if (!chef) {
    return res.status(404).json({
      status: 'fail',
      message: 'Chef não encontrado'
    });
  }
  await chef.destroy();
  res.status(204).json({
    status: 'success',
    data: null
  });
});

exports.searchBySpecialization = catchAsync(async (req, res, next) => {
  const { specialization } = req.query;

  if (!specialization) {
    return res.status(400).json({
      status: 'fail',
      message: 'Especialização não fornecida na query'
    });
  }

  const chefs = await Chef.findAll({
    where: {
      specialization: specialization
    },
    include: {
      model: User,
      as: 'user',
      attributes: ['name', 'email']
    }
  });

  res.status(200).json({
    status: 'success',
    results: chefs.length,
    data: {
      chefs
    }
  });
});
