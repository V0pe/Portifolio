let menuOpen = document.getElementById("menu");
let navbar = document.querySelector(".navbar");
let menuClose = document.querySelector(".fa-times");
let menuList = document.querySelectorAll(".navbars a");


menuOpen.addEventListener("click", () => { 
    navbar.style.top = "0"})

menuClose.addEventListener("click", () => { 
    navbar.style.top = "-98vh"})

for (let i=0;i<3;i++){
  menuList[i].addEventListener("click", ()=> {
    navbar.style.top = "-98vh";})};