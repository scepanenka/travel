import React from "react";
import {Link} from 'react-router-dom';

const CitiesList = (props) => {

  function getCountry(countryId) {
    return props.state.countries.find(country => country.id == countryId).name;
  }

  const citiesElement = props.state.cities.map(city => (
    <Link
      to={{
        pathname: '/cities/' + city.id
      }}
      ClassName="card p-1 m-1 shadow-sm"
    >
      <h6 className="card-title">{city.name}, {getCountry(city.countryId)}</h6>
    </Link>));

  return (
    <div className="container">
      {citiesElement}
    </div>);
};

export default CitiesList;
