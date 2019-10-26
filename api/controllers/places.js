const placesService = require('../services/places');

const get = function(req, res){
  res.send(placesService.get(req.params.id))
};

const getAll = function(req, res){
  res.send(placesService.getAll())
};

const getPlacesByCityId = function(req, res){
  res.send(placesService.getPlacesByCityId(req.params.id))
};

module.exports = {
  get,
  getAll,
  getPlacesByCityId
};
