import React from "react";
import City from "./City";
import CitiesList from "./CitiesList";
import {Route, Switch} from "react-router-dom";

const Cities = (props) => {
  console.log(props.state);
  let state = props.state;
  return (
    <div>

      <Switch>
        <Route exact path="/cities"
               render={() => <CitiesList state={state}/>}/>
        <Route path="/cities/:cityId"
               render={(props) => <City state={state} {...props}/>}/>
      </Switch>
    </div>
  )
};

export default Cities;
