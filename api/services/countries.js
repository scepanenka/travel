const data = require('../data');
const citiesService = require('./cities');

const getCountry = function(id){
  return getAllCountries().find(country => country.id == id);
};

const getAllCountries = function(){
  return data.Countries;
};

const getCitiesByCountryId = function(req) {
  const cities = citiesService.getAll();
  const cities_ids = data.Cities
      .filter(
          row => row.countryId == req.params.countryId
      ).map(
          row => row.id
      );
  return cities.filter(city => cities_ids.includes(city.id));
};

module.exports = {
  getCountry,
  getAllCountries,
  getCitiesByCountryId
};
