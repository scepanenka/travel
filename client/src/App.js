import React, { Component } from 'react';
import './App.css';
import Search from "./components/Search";
import Recomendations from "./components/Recomendations";
import Cities from "./components/Cities";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
      cities: []
    };
  }

  callAPI() {
    fetch("http://localhost:3005/countries")
      .then(res => res.json())
      .then(data => this.setState( {countries: data})
      ).catch(console.log);
    fetch("http://localhost:3005/cities")
      .then(res => res.json())
      .then(data => this.setState( {cities: data})
      ).catch(console.log);
  }



  componentWillMount() {
    this.callAPI();
  }
  render() {
    return (
<div className="App">
  <div className="container">
    <Search />
    <Recomendations />
    <Cities state={this.state}/>
  </div>
</div>
    );
  }

}

export default App;
