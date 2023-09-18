var menuButton = document.querySelector("header > button:nth-child(2)");

var hamburgermenu = document.querySelector("nav:first-of-type");

menuButton.onclick = toggleMenu;

function toggleMenu () {
    hamburgermenu.classList.toggle("open")
}

var sluitButtom = document.querySelector("nav button");

sluitButtom,onclick = closeMenu

function closeMenu() {
    hamburgermenu.classList.remove("open")
}