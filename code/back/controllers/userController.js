const User = require ('../models/user.js');
const catchAsync = require('../utils/catchAsync.js');

exports.getAllUsers = catchAsync(async (req, res, next) => {
  const users = await User.findAll();
  res.status(200).json({
    status: 'success',
    results: users.length,
    data: {
      users,
    },
  });
});

exports.getUser = catchAsync(async (req, res, next) => {
  const user = await User.findOne({id: req.params.id});
  if (!user) {
    return res.status(404).json({ status: 'fail', message: 'Usuário não encontrado' });
  }

  res.status(200).json({
    status: 'success',
    data: {
      user,
    },
  });
});

exports.updateUser = catchAsync(async (req, res, next) => {
  const { name, email, password, role } = req.body;
  const { id } = req.params;

  const [updateCount] = await User.update(
    { name, email, password, role },
    { where: { id } }
  );

  if (updateCount === 0) {
    return res.status(404).json({ status: 'fail', message: 'Usuário não encontrado ou nenhuma alteração realizada' });
  }

  const updatedUser = await User.findOne({id: id});

  res.status(200).json({
    status: 'success',
    data: {
      updatedUser,
    },
  });
});

exports.deleteUser = catchAsync(async (req, res, next) => {
  
  const user = await User.destroy({
    where : {
      id : req.params.id
    }
  })

  if (!user) {
    return res.status(404).json({ status: 'fail', message: 'Usuário não encontrado' });
  }

  res.status(204).json({
    status: 'success',
    data: null,
  });
});
