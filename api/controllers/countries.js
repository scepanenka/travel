const countriesService = require('../services/countries');

const get = function(req, res){
  res.send(countriesService.get(req.params.id))
};

const getAll = function(req, res){
  res.json(countriesService.getAll())
};

module.exports = {
  get,
  getAll
};
