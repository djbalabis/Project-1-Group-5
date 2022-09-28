//Google maps API

/*})
.then(function(data){
    console.log(data);
});*/
/*const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '06c0694a15msh45ebf1c15bfb103p1b9c12jsn4b8372b0a32e',
      'X-RapidAPI-Host': 'restaurants-near-me-usa.p.rapidapi.com'
    }
  };
  /*const apikey ="06c0694a15msh45ebf1c15bfb103p1b9c12jsn4b8372b0a32e"*/
  
  /*fetch('https://restaurants-near-me-usa.p.rapidapi.com/restaurants/location/state/MI/city/West%20Bloomfield/0',options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
*/
// JavaScript Document
var queryURL =
  'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=nyc&category=restaurants';
var apiKey = 'bFcEXqo4FCBDva9UcdbFDDtf3-9I9hmwKWoN4Anl3fNsHyfZOcD8hypZ8HSDTLMwk2vQYgW8eOTV23_IcCx30o5pNfobQoQLxurs67zM7CfYv-sIxHsobpBsBnAzY3Yx';

$.ajax({
  url: queryURL,
  method: 'GET',
  headers: {
    accept: 'application/json',
    'x-requested-with': 'xmlhttprequest',
    'Access-Control-Allow-Origin': '*',
    Authorization: `Bearer OEfT0vwGcTKa-Vf4ZkPXf4Jax8psNp-064XV7CFYGxfv6tBYWsQgL52HmCoHoFtDNNiIFDdobq5Yvhw6dnYsxkGcmL-axC2eIixeSgz-CWg7UKvKefy7ByEOYToyY3Yx`,
    
  },
  success: function (result) {
    console.log(result);
  },
});


function initMap() {
  
 //let  map = new google.maps.Map(document.getElementById("map"),
 var options= {
    center: { lat: 40.5187, lng: 74.4121 },
    zoom: 8,
  };
  


  let map =new google.maps.Map(document.getElementById('map'),options);
  
  /*var marker = new google.maps.Marker({
    position:{lat: 40.5187, lng: 74.4121},
    map:map,
    icon:"https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet.svg",
  });*/
  addMarker({lat: 40.5187, lng: 74.4121});
  function addMarker(coords){
    var marker = new google.maps.Marker({
      position:{lat: 40.5187, lng: 74.4121},
      map:map,
      icon:"https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet.svg"
  });

}

window.initMap = initMap;

/* // JavaScript Document
/*var queryURL =
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
});*/
