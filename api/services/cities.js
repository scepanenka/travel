const data = require('../data');
const countriesService = require('../controllers/countries');

const get = function(id){
  return getAll().find(city => city.id == id);
};

const getAll = function(){
  return data.Cities;
};

const getCitiesByCountryId = function(req) {
  const country = countriesService.get(req.params.countryId);
  const cities_ids = data.Cities
    .filter(
      row => row.countryId == req.params.countryId
    ).map(
      row => row.id
    );
  return getAll().filter(city => cities_ids.includes(city.id));
};

module.exports = {
  get,
  getAll,
  getCitiesByCountryId
};
