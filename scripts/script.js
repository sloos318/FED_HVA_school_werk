var openButtonMenu = document.querySelector("header > button:nth-of-type(1)");
console.log("hi");
console.log(openButtonMenu);

var closeButtonMenu = document.querySelector("nav button:first-of-type");

var hamburgerMenu = document.querySelector("header nav:first-of-type");

openButtonMenu.onclick = openMenu;


function openMenu () {
    
    hamburgerMenu.classList.add("open");
}


closeButtonMenu.onclick = closeMenu;

function closeMenu() {
    hamburgerMenu.classList.remove("open");
}