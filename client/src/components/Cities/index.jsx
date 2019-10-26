import React from "react";



const Cities = ({ state }) => {
  return (
    <div>
      {state.cities.map((city) => (
        <div className="card">
          <div className="card-body">
            <h6 className="card-title">{city.name}, {state.countries.find(country => country.id == city.countryId).name}</h6>
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam amet delectus dolores ea eaque eveniet hic laborum laudantium minima, modi numquam officia possimus rerum sapiente sequi sint tempora voluptatem voluptatum.</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cities;
