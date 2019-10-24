var express = require('express');
var router = express.Router();

const citiesService = require('../controllers/cities');

router.route('/')
  .get(citiesService.getAll);

router.route('/:id')
  .get(citiesService.get);

module.exports = router;
