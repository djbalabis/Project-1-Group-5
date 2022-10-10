//Google maps API
/*const manhattan = { lat: 40.7831, lng: -73.9712 };
 // var regLat = parseFloat(data.region.center.lattitude);
  //var regLng = parseFloat(data.region.center.longitude);
  
  //const location = new google.maps.LatLng(regLat,regLng);
  // map = new google.maps.Map(document.getElementById("map"), {
  //   zoom: 8,
  //   center: {lat:40.7831,lng:-73.9712},*/
  var lat =37.0902;
  var lng =95.7129;
  function initMap(){
    var mapLocation = new google.maps.LatLng(lat, lng);
    var options={
      zoom:10,
      centre:mapLocation
    };
    
    
    var map = new google.maps.Map(document.querySelector("iframe"),options);
    
    
  }
  initMap();
 // console.log(map);*/
 
 

 //searchButton.addEventListener('click',searchHandler);
 
//URL from Yelp Api
var queryURL = 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?';

//fetch the data from Yelp 
function yelpFetchData(){
  
    fetch(queryURL,{
      "method": 'GET',
  "headers": {
    "accept": 'application/json',
    'x-requested-with': 'xmlhttprequest',
    'Access-Control-Allow-Origin': '*',
    "Authorization": `Bearer OEfT0vwGcTKa-Vf4ZkPXf4Jax8psNp-064XV7CFYGxfv6tBYWsQgL52HmCoHoFtDNNiIFDdobq5Yvhw6dnYsxkGcmL-axC2eIixeSgz-CWg7UKvKefy7ByEOYToyY3Yx`,
   // "Authorization": 'Bearer bFcEXqo4FCBDva9UcdbFDDtf3-9I9hmwKWoN4Anl3fNsHyfZOcD8hypZ8HSDTLMwk2vQYgW8eOTV23_IcCx30o5pNfobQoQLxurs67zM7CfYv-sIxHsobpBsBnAzY3Yx'
  },
    })
    .then(response =>{
      return response.json();
   })
   .then((data) =>{
     //console.log(data);
     
     printYelpData(data);
   })
   .catch(err =>{
      console.error(err);
   });

  }
 // finds data from Yelp 
 function printYelpData(data){
   // console.log(data);

    var yelpSearchList = data.businesses;
    for(let i=0;i<yelpSearchList.length;i++){
      var restName = data.businesses[i].name;
      var restAddress = data.businesses[i].address;
      console.log(restName);
      
      

      var searchRequest =  document.getElementById("search-request");
      var restaurantName= document.createElement('h2');

      restaurantName.textContent= restName;
      
      restaurantName.className="restarant-title";
      searchRequest.append(restName);
      
    }
   
 }
 var searchButton = document.querySelector(".button");

 function searchHandler(event){
   event.preventDefault();
  
   var searchText = document.querySelector("#search-text").value;
   searchText = searchText.toLowerCase();
    if(!searchText){
        return;
    }
    
   
    queryURL=queryURL+"location="+searchText +"&category=restaurants";
   
    //window.alert(queryURL);
    yelpFetchData();
    
    }


    searchButton.addEventListener('click',searchHandler);



  
  




