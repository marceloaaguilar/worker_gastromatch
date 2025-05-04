const User = require ('../models/user.js');
const catchAsync = require('../utils/catchAsync.js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

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
  const user = await User.findOne({where: {id: req.params.id}});

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

  const profile_photo = req.file?.path || null;
  const { name, phone, address } = req.body;
  const { id } = req.params;
  let password = req.body.password;

  if (password) {
    password = await bcrypt.hash(password, 12);
  }

  const [updateCount] = await User.update(
    { name, phone, password, address, profile_photo },
    { where: { id: id } }
  );

  if (updateCount === 0) {
    return res.status(404).json({ status: 'fail', message: 'Usuário não encontrado ou nenhuma alteração realizada' });
  }

  const updatedUser = await User.findOne({where: {id: id}});

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

exports.verifyToken = catchAsync(async (req, res, next) => {

  const token = req.cookies.token;
  
  if (!token) {
    return res.status(401).json({ message: 'Token ausente' });
  }

  try {

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findOne({where: {id: decoded.id},attributes: { exclude: ['password'] }});

    return res.status(200).json({
      user: user
    });
  } catch (err) {
    return res.status(401).json({ message: 'Token inválido ou expirado' });
  }

});

exports.logoutUser = catchAsync(async (req, res, next) => {

  res.clearCookie('token', {
    httpOnly: true,
    secure: true,
    sameSite: 'Strict'
  });

  res.status(200).json({ message: 'Logout realizado com sucesso' });
  
})
