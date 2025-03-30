const User = require ('../models/user.js');
const catchAsync = require('../utils/catchAsync.js');

exports.getAllUsers = catchAsync(async (req, res, next) => {
  const users = await User.findOne()
})