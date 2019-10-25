const data = require('../data');
const citiesService = require('./cities');

const get = function(id){
  return getAll().find(country => country.id == id);
};

const getAll = function(){
  return data.Countries;
};

const getCitiesByCountryId = function(req) {
  const cities = citiesService.getAll();
  const cities_ids = data.Cities
      .filter(
          city => city.countryId == req.params.id
      ).map(
          city => city.id
      );
  return cities.filter(city => cities_ids.includes(city.id));
};

module.exports = {
  get,
  getAll,
  getCitiesByCountryId
};
