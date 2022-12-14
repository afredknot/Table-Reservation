const menu = document.querySelector(".menu");
const nav = document.querySelector("#navItems");

function showNav() {
    nav.classList.toggle("display_none");
};

menu.addEventListener("click", showNav);