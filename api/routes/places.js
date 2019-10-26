const express = require('express');
const router = express.Router();

const placesController = require('../controllers/places');

router.route('/')
  .get(placesController.getAll);

router.route('/:id')
  .get(placesController.get);

module.exports = router;
