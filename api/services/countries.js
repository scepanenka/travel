const data = require('../data');

const getCountry = function(id){
  return getAllCountries().find(country => country.id == id);
};

const getAllCountries = function(){
  return data.Countries;
};

module.exports = {
  getCountry,
  getAllCountries
};
