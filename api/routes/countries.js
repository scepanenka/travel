const express = require('express');
const router = express.Router();

const countriesController = require('../controllers/countries');

router.route('/')
  .get(countriesController.getAll);

router.route('/:id/cities')
  .get(countriesController.getCitiesByCountryId);

router.route('/:id')
  .get(countriesController.get);

module.exports = router;
