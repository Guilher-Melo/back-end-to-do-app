const express = require('express');

  //API Routes
  const router = express.Router();
  

  //Todo routes
  const todoRoute = require('./todo');
 // todoController.register(router, '/todos');
 router.use('/', todoRoute);

  module.exports = router;
