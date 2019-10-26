const data = require('../data');

const get = function(id){
  return getAll().find(country => country.id == id);
};

const getAll = function(){
  return data.Countries;
};

module.exports = {
  get,
  getAll
};
