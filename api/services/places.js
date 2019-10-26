const data = require('../data');

const get = function(id){
  return getAll().find(place => place.id == id);
};

const getAll = function(){
  return data.Places;
};

const getPlacesByCityId = function(countryId) {
  const places = getAll();
    return places.filter(place => place.cityId == cityId);
};

module.exports = {
  get,
  getAll,
  getPlacesByCityId
};
