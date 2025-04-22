const express = require('express');
const authController = require('./../controllers/authController');
const userController = require('./../controllers/userController');
const upload = require('../middlewares/upload');

const router = express.Router();

router.post('/signup', upload.single('profile_photo'), authController.signup);
router.post('/signin', authController.signin);

router 
  .route('/')
  .get(userController.getAllUsers)

router
  .route("/:id")
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser)

module.exports = router;