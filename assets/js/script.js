//Google maps API

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
