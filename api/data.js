module.exports = {
  Countries: [{
    "id": 1,
    "name": "Belarus"
  },
    {
      "id": 2,
      "name": "England"
    },
    {
      "id": 3,
      "name": "France"
    },
    {
      "id": 4,
      "name": "Greece"
    }
  ],
  Cities: [{
    "id":1,
    "countryId":1,
    "name":"Grodno"
  },
    {
      "id":2,
      "countryId":1,
      "name":"Minsk"
    },
    {
      "id":3,
      "countryId":2,
      "name":"London"
    },
    {
      "id":4,
      "countryId":2,
      "name":"Salisbury"
    },
    {
      "id":5,
      "countryId":3,
      "name":"Paris"
    },
    {
      "id":6,
      "countryId":3,
      "name":"Nice"
    },
    {
      "id":7,
      "countryId":4,
      "name":"Athens"
    }
  ],
  Places: [
    {
      "id":1,
      "cityId":1,
      "name":"Kolozha Church",
      "imgUrl": "https://www.belarus.by/dadvimages/001516_799657.jpg",
      "Description": "Sts Boris and Gleb Church (Kolozha Church) is an architectural pearl of ancient Grodno, a unique specimen of Eastern Orthodox architecture in Belarus and entire Eastern Europe."
    },
    {
      "id":2,
      "cityId":1,
      "name":"St. Francis Xavier (Farny) Cathedral",
      "imgUrl": "http://www.belarus.by/dadvimages/s001536_257064.jpg",
      "Description": "This magnificent cathedral is certainly a landmark of the ancient city."
    },
  ]
};
