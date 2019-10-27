import React from 'react';
import s from './City.module.scss';

let City = (props) => {
  console.log(props.state);
  const cityId = props.match.params.cityId;

  const getCity = (id) => {
    let city = props.state.cities.find(city => city.id == id);
    return city.name;
  };

  return (
    <div>
      <p>
        <strong>City ID: {cityId}</strong>
      </p>
      <p>
        <strong>City Name: {getCity(cityId)}</strong>
      </p>
    </div>
  );
};

export default City;
