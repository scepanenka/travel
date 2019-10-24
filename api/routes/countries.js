var express = require('express');
var router = express.Router();

const countriesService = require('../controllers/countries');

router.route('/')
  .get(countriesService.getAll);

router.route('/:id')
  .get(countriesService.get);

module.exports = router;
