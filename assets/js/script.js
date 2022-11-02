const searchBtn = document
  .querySelector(".button")
  .addEventListener("click", whenClicked);
const searchInput = document.querySelector(".input").value;
const searches = document.querySelector("#searches");
const searchForm = document.querySelector("#search-form");

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "71fd271e6dmsh37048dacb17d521p168974jsn3d5264e97b52",
    "X-RapidAPI-Host": "edamam-recipe-search.p.rapidapi.com",
  },
};

function getSearchResults() {
  const searchInputValue = document.querySelector(".input").value;
  fetch(
    `https://edamam-recipe-search.p.rapidapi.com/search?q=${searchInputValue}`,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      response.hits.forEach(({ recipe }) => {
        // var ul = document.getElementById("results");
        var items = document.getElementById("item");
        // var li = document.createElement("li");
        var para = document.createElement("p");
        var link = document.createElement("a");
        // var images = document.createElement("img");
        link.setAttribute("href", (recipe.url));
        link.setAttribute("target", "_blank");
        // images.setAttribute("src", (recipe.imgage));
        para.appendChild(document.createTextNode(recipe.label));
        link.appendChild(document.createTextNode(recipe.url));
        // images.appendChild(document.createTextNode(recipe.image));
        // li.appendChild(document.createTextNode(recipe.label));
        // li.appendChild(document.createTextNode(recipe.source));
        // li.appendChild(document.createTextNode(recipe.url));
        // ul.appendChild(li);Node
        items.appendChild(para);Node
        items.appendChild(link);Node
        // items.appendChild(images);Node
      });
    })
    // .then(response => console.log(response))
    .catch((err) => console.error(err));
}
function whenClicked() {
  // const resultsLi = document.createElement("li");
  // resultsLi.innerHTML = getSearchResults();
  getSearchResults();
  // searchResults.appendChild(resultsLi);
}

// let searchStorage = localStorage.getItem("searches")
//   ? JSON.parse(localStorage.getItem("searches"))
//   : [];

// searchForm.addEventListener("submit", (e) => {
//   e.preventDefault();
//   searchStorage.push(searchInputValue);
//   localStorage.setItem("searches", searchInputValue);
//   // localStorage.setItem("searches", JSON.stringify(searchStorage));
//   listBuilder(searchInputValue.value);
//   searchInputValue.value = "";
// });

// const listBuilder = (text) => {
//   const search = document.createElement("li");
//   search.innerHTML = text + ' <button onclick="deleteSearch(this)">x</button>';
//   searches.appendChild(search);
// };