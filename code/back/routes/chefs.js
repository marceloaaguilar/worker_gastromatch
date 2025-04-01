const express = require('express');
const chefController = require('../controllers/chefController');

const router = express.Router();

router
  .route('/')
  .get(chefController.getAllChefs)    // GET    /chefs → Lista todos os chefs
  .post(chefController.createChef);   // POST   /chefs → Cria um novo chef

router
  .route('/:id')
  .get(chefController.getChef)      // GET    /chefs/:id → Retorna um chef específico
  .patch(chefController.updateChef) // PATCH  /chefs/:id → Atualiza um chef
  .delete(chefController.deleteChef); // DELETE /chefs/:id → Remove um chef

module.exports = router; 