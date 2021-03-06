const express = require('express');
const router = express.Router();

const citiesController = require('../controllers/cities');
const placesController = require('../controllers/places');

router.route('/')
  .get(citiesController.getAll);

router.route('/:id')
  .get(citiesController.get);

router.route('/:id/places')
  .get(placesController.getPlacesByCityId);

module.exports = router;
