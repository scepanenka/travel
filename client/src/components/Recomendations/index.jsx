import React from "react";
import s from './Recomendations.module.scss';

const Recomendations = () => {
  return (
    <div className={s.wrap}>
      <div className="card-body">
        <h5 className="card-title">Recomendation</h5>
        <div className={s.pic}>
          <img className="card-img" src="https://www.belarus.by/dadvimages/001516_799657.jpg" alt=""/>
        </div>
      </div>
    </div>
  );
};

export default Recomendations;
