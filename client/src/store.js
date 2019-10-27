let store = {
  state:  {
    countries: [],
    cities: [],
    places: []
  },

  getState() {
    fetch("http://localhost:3005/countries")
      .then(res => res.json())
      .then(data => this.state.countries = data)
      .catch(console.log);
    fetch("http://localhost:3005/cities")
      .then(res => res.json())
      .then(data => this.state.cities = data)
      .catch(console.log);
    fetch("http://localhost:3005/places")
      .then(res => res.json())
      .then(data => this.state.places = data)
      .catch(console.log);
    return this.state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  }
};

export default store;
window.store = store;
