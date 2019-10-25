const express = require('express');
const router = express.Router();

const citiesController = require('../controllers/cities');

router.route('/')
  .get(citiesController.getAll);

router.route('/:id')
  .get(citiesController.get);

module.exports = router;
