const data = require('../data');

const get = function(id){
  return getAll().find(city => city.id == id);
};

const getAll = function(){
  return data.Cities;
};

const getCitiesByCountryId = function(countryId) {
  const cities = getAll();
    return cities.filter(city => city.countryId == countryId);
};

module.exports = {
  get,
  getAll,
  getCitiesByCountryId
};
