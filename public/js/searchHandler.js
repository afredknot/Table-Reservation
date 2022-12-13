const searchBar = document.querySelector("#searchBar");
const searchBtn = document.querySelector("#searchBtn");
const searchErr = document.querySelector("#searchErr");
const searchClear = document.querySelector("#searchClear");

function handleSearch(e) {
    e.preventDefault();

    let search = searchBar.value.trim();
    console.log(search);

    if(search.length > 0) {
        document.location.replace(`/api/restaurants/search/${search}`);
    };
};

function toggleClear(e) {
    e.preventDefault();

    if(searchBar.value.length > 0 && searchClear.classList.contains("hidden") && searchBtn.classList.contains("hidden")) {
        searchClear.classList.toggle("hidden");
        searchBtn.classList.toggle("hidden");
    };
};

function clearSearch() {
    console.log("clicked");
    searchBar.value = "";
    searchClear.classList.toggle("hidden");
    searchBtn.classList.toggle("hidden");
    searchBar.focus();
}

searchBtn.addEventListener("click", handleSearch);
searchBar.addEventListener("input", toggleClear);
searchClear.addEventListener("click", clearSearch);
// searchBar.addEventListener("")