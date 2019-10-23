import React from "react";
import s from './Recomendations.module.scss';
import { FaSearch } from 'react-icons/fa';

const Recomendations = () => {
  return (
    <div className={s.wrap}>
      <h5>Recomendations</h5>
      <div className={s.pic}>
        <img src="https://www.planetware.com/photos-large/F/france-paris-eiffel-tower.jpg" alt=""/>
      </div>
    </div>
  );
};

export default Recomendations;
