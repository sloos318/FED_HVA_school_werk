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

var openButtonMenu2 = document.querySelector("header button:nth-of-type(2)");

var closeButtonMenu2 = document.querySelector("nav:nth-of-type(2) button");

var hamburgerMenu2 = document.querySelector("header nav:nth-of-type(2)");

openButtonMenu2.onclick = openMenu2;


function openMenu2 () {
    
    hamburgerMenu2.classList.add("opennummertwee");
}


closeButtonMenu2.onclick = closeMenu2;

function closeMenu2() {
    hamburgerMenu2.classList.remove("opennummertwee");
}