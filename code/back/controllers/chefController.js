const Chef = require('../models/chef.js');
const catchAsync = require('../utils/catchAsync.js');

exports.getAllChefs = catchAsync(async (req, res, next) => {
  const chefs = await Chef.findAll();
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
  const newChef = await Chef.create(req.body);
  res.status(201).json({
    status: 'success',
    data: {
      chef: newChef
    }
  });
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