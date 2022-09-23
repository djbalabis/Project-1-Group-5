/*var requestUrl = "https://maps.googleapis.com/maps/api/js?key=AIzaSyBEPgNKxFr2HdeaPdLUbu4bgm_O3CMluyI&callback=initMap";
console.log(requestUrl);
/*fetch(requestUrl)
.then(function(response){
    return response.json();

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
  
  fetch('https://restaurants-near-me-usa.p.rapidapi.com/restaurants/location/state/MI/city/West%20Bloomfield/0', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
