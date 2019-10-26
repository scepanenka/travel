const express = require('express');
const router = express.Router();

const countriesController = require('../controllers/countries');
const citiesController = require('../controllers/cities');

router.route('/')
  .get(countriesController.getAll);

router.route('/:id/cities')
  .get(citiesController.getCitiesByCountryId);

router.route('/:id')
  .get(countriesController.get);

module.exports = router;
