//Google maps API

<<<<<<< HEAD
})
.then(function(data){
    console.log(data);
});*/
const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '06c0694a15msh45ebf1c15bfb103p1b9c12jsn4b8372b0a32e',
      'X-RapidAPI-Host': 'restaurants-near-me-usa.p.rapidapi.com'
    }
  };
  /*const apikey ="06c0694a15msh45ebf1c15bfb103p1b9c12jsn4b8372b0a32e"*/
  
  fetch('https://restaurants-near-me-usa.p.rapidapi.com/restaurants/location/state/MI/city/West%20Bloomfield/0',options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
=======
let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}

window.initMap = initMap;

// JavaScript Document
var queryURL =
  "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=nyc&category=restaurants";
var apiKey = "my key";

$.ajax({
  url: queryURL,
  method: "GET",
  headers: {
    accept: "application/json",
    "x-requested-with": "xmlhttprequest",
    "Access-Control-Allow-Origin": "*",
    Authorization: `Bearer PbQtfRepnnfwMICkBmdOxrwD1Id049g3Ju4f1zyvrQQ3ZcG75zdXp3zfqU8cAIM6G_ZpusIpcYQNKphu8lxcYPU_sjA6FmYC20Xqg7BSpsHotMAC3BbIINvmV0oyY3Yx`,
  },
  success: function (result) {
    console.log(result);
  },
});
>>>>>>> 99fc763641a3c1ac0b1bf6116af9a1c2fc9da1fe
