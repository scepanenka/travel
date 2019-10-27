import React from 'react';
import './App.css';
import Search from "./components/Search";
import Recomendations from "./components/Recomendations";
import Cities from "./components/Cities/";
import {BrowserRouter, Route} from "react-router-dom";


let App = (props) => {
  let state=props.state;
    return (
      <BrowserRouter>
        <div className="App">
          <div className="container">
            <Search/>
            <Recomendations/>
            <Cities state={state} />
          </div>
        </div>
      </BrowserRouter>
    );
};




export default App;
