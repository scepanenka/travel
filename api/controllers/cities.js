const citiesService = require('../services/cities');

const get = function(req, res){
  res.send(citiesService.get(req.params.id))
};

const getAll = function(req, res){
  res.send(citiesService.getAll())
};

const getCitiesByCountryId = function(req, res){
  res.send(citiesService.getCitiesByCountryId(req.params.id))
};

module.exports = {
  get,
  getAll,
  getCitiesByCountryId
};
