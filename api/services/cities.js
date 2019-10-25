const data = require('../data');

const get = function(id){
  return getAll().find(city => city.id == id);
};

const getAll = function(){
  return data.Cities;
};

module.exports = {
  get,
  getAll
};
