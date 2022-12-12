const searchBar = document.querySelector("#searchBar");
const searchBtn = document.querySelector("#searchBtn");
const searchErr = document.querySelector("#searchErr");

function handleSearch(e) {
    e.preventDefault();

    let search = searchBar.value.trim();
    console.log(search)

    if (search.length > 0) {
        document.location.replace(`/api/restaurants/search/${search}`);
    }
};

searchBtn.addEventListener("click", handleSearch);