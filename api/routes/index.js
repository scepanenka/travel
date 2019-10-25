const express = require('express');
const countries = require('./countries');
const cities = require('./cities');

const router = express.Router();

router.use('/cities', cities);
router.use('/countries', countries);

module.exports = router;
