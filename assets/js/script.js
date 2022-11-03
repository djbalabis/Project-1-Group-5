// Set variables for DOM elements
const searchBtn = document
  .querySelector(".button")
  .addEventListener("click", whenClicked);
const searchInput = document.querySelector(".input").value;
const searches = document.querySelector("#searches");
const searchForm = document.querySelector("#search-form");

// API key object
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "71fd271e6dmsh37048dacb17d521p168974jsn3d5264e97b52",
    "X-RapidAPI-Host": "edamam-recipe-search.p.rapidapi.com",
  },
};

// Function to fetch API and append results to content area
function getSearchResults() {
  const searchInputValue = document.querySelector(".input").value;
  fetch(
    `https://edamam-recipe-search.p.rapidapi.com/search?q=${searchInputValue}`,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      response.hits.forEach(({ recipe }) => {

        var items = document.getElementById("item");
        var para = document.createElement("p");
        var link = document.createElement("a");

        link.setAttribute("href", (recipe.url));
        link.setAttribute("target", "_blank");
        para.appendChild(document.createTextNode(recipe.label));
        link.appendChild(document.createTextNode(recipe.url));
        items.appendChild(para);Node
        items.appendChild(link);Node
        
      });
    })
    .catch((err) => console.error(err));
}

// Event listener function to run search results function
function whenClicked() {

  getSearchResults();

}

// Variables for Dad joke area
const joke = document.querySelector('#dad-joke');
const btn = document.querySelector('#btn');
const dadJoke = document.querySelector('#dad-joke p');

btn.addEventListener('click',randomDadJoke);
randomDadJoke();
// Asynce function for API fetch to generate random joke
async function randomDadJoke(){
  const jokeResponse = await fetch('https://icanhazdadjoke.com/', {
    headers: {
      'Accept': 'application/json'
    }
  });
  const jokeJson = await jokeResponse.json();
  dadJoke.innerHTML = jokeJson.joke;
}