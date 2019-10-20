import React, { Component } from 'react';
import './App.css';
import Search from "./components/Search/Search";
import Recomendations from "./components/Recomendations/Recomendations";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  callAPI() {
    debugger;
    fetch("http://localhost:5000/testApi")
      .then(res => res.text())
      .then(res => this.setState({ apiResponse: res }));
  }

  componentWillMount() {
    this.callAPI();
  }
  render() {
    return (
<div className="App">
      <Search />
      <Recomendations />
          <p className="App-intro">{this.state.apiResponse}</p>
    </div> 
    );
  }

}

export default App;
