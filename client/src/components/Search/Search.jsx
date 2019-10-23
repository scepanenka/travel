import React from "react";
import s from './Search.module.scss';
import { FaSearch } from 'react-icons/fa';

const Search = () => {
  return (
    <div className={s.wrap}>
      <h3>Where do you want to go?</h3>
      <div className={s.search}>
        <input type="text" className={s.searchTerm} placeholder="Search" />
          <button type="submit" className={s.searchButton}>
            <FaSearch />
          </button>
      </div>
    </div>
  );
};

export default Search;
