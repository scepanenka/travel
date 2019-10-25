import countriesService from "../services/countries";

const get = function(req, res){
  res.send(countriesService.get(req.params.id))
};

const getAll = function(req, res){
  res.send(countriesService.getAll())
};

const getCitiesByCountryId = function(req, res){
  res.send(countriesService.getCitiesByCountryId(req.params.id))
};

module.exports = {
  get,
  getAll,
  getCitiesByCountryId
};
