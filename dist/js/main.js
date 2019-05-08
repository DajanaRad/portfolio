const menuHamburger = document.querySelector(".nav-button");
const menuMani = document.querySelector(".menu");
const menuPhoto = document.querySelector(".menu-photo");
const menuNav = document.querySelector(".menu-nav");
let menuNavItems = document.querySelectorAll(".nav-items");

//set initial state of menu
let showMenu = false;

menuHamburger.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuHamburger.classList.add("close");
    menuMani.classList.add("show");
    menuNav.classList.add("show");
    menuPhoto.classList.add("show");
    menuNavItems.forEach(item => item.classList.add("show"));

    //set menu state
    showMenu = true;
  } else {
    menuHamburger.classList.remove("close");
    menuMani.classList.remove("show");
    menuNav.classList.remove("show");
    menuPhoto.classList.remove("show");
    menuNavItems.forEach(item => item.classList.remove("show"));
    showMenu = false;
  }
}
