import React from "react";
import s from './Search.module.scss';

const Search = () => {
  return (
    <div className={s.wrap}>
      <h5>Where do you want to go?</h5>
      <div className="active-cyan-3 m-4">
        <input className="form-control" type="text" placeholder="Input destination" aria-label="Search" />
      </div>
    </div>
  );
};

export default Search;
