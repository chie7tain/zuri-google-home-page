// this functiion is for sliding in the responsive nav bar
const navLinksContainer = document.querySelector(".nav-links-container");
const burger = document.querySelector(".burger");
const navLinks = document.querySelectorAll(".nav-link");
const wrapper = document.querySelector(".main-wrapper");
const navBar = document.querySelector(".nav-bar");
const mainContainer = document.querySelector(".main-container");

// script for responsive navbar

// this function uses transititon to smoothly animate the nav links when the burger is clicked by the user
function animateLinks(links) {
  links.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = "";
    } else {
      link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`
    }
  })
}
// this function helps to close the nav when the user clicks on any nav link
function toggleNavFromLink(navLinks) {
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navLinksContainer.classList.toggle("nav-active");
    })
  })
}

const navSlide = ()=>{
  burger.addEventListener("click",()=>{
    navLinksContainer.classList.toggle("nav-active");
  })
  mainContainer.addEventListener("click",()=>{
    if(navLinksContainer.classList.contains("nav-active")){
      navLinksContainer.classList.remove("nav-active");
    }
  })
  toggleNavFromLink(navLinks);
}
navSlide();