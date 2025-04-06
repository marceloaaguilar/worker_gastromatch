const {promisify} = require('util');
const jwt = require('jsonwebtoken');
const User = require ('../models/user.js');
const catchAsync = require('../utils/catchAsync.js');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const signToken = id => {
  return jwt.sign({id: id}, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN
  });
}

async function correctPassword(candidatePassword, userPassword) {
  try {
    return await bcrypt.compare(candidatePassword, userPassword);
  } catch (error) {
    console.log("Error on password compare: " + error)
  }
};
 
exports.signup = catchAsync(async (req, res, next) => {

  try {
    const newUser = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password, 
      role: req.body.role
    });

    const token = signToken(newUser._id);

    res.status(201).json({
      status: 'success',
      token,
      data: {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
        role: newUser.role
      }
    })
  } catch (error) {
      return res.status(400).json({
        mensagem: "Ocorreu um erro ao realizar o cadastro",
        erro: error && error.errors? error.errors.map((e) => e.message) : error
      })
  }

});

exports.signin = async (req, res, next) => {
  const {email, password} = req.body;

  if (!email || !password) {
    return res.status(400).json({
      error: true,
      message: "Por favor, forneça um e-mail e uma senha!'",
    })
  }

  const user = await User.findOne({email});
  if(!user || !await correctPassword(password, user.password)) {
    return res.status(401).json({
      error: true,
      message: "Credenciais inválidas!",
    })
  } 

  const token = signToken(user._id);
  res.status(200).json({
    message: "Usuário autenticado com sucesso!",
    token
  })
}

exports.protect = catchAsync(async (req, res, next) => { 

  let authToken;
  let decoded;
  if (req.headers && req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    authToken = req.headers.authorization.split(' ')[1];
  }

  if (!authToken) {
    return res.status(401).json({
      error: true,
      message: "Você precisa se autenticar primeiro!'",
    })
  }

  try {
    decoded = await promisify(jwt.verify)(authToken, process.env.JWT_SECRET);
  } catch(error) {
      return res.status(401).json({
        error: true,
        message: "Você precisa se autenticar primeiro!'",
      })
  }

  next();
})