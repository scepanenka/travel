const express = require('express');
const countries = require('./countries');
const cities = require('./cities');
const places = require('./places');

const router = express.Router();

router.use('/cities', cities);
router.use('/countries', countries);
router.use('/places', places);

module.exports = router;
