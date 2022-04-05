
const menuOpen = document.getElementById('menu');
const navbar = document.querySelector('.navbar');
const menuClose = document.querySelector('.fa-times');
const menuList = document.querySelectorAll('.navbars a');

menuOpen.addEventListener('click', () => {
  navbar.style.top = "0"
})

menuClose.addEventListener('click', () => {
  navbar.style.top = "-98vh"
});

for (let i = 0; i < 3; i++) {
  menuList[i].addEventListener('click', () => {
    navbar.style.top = "-98vh";
  })
}
