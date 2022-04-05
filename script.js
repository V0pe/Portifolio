
const menuOpen = document.getElementById('menu');
const navbar = document.querySelector('.navbar');
const menuClose = document.querySelector('.close');
const menuList = document.querySelectorAll('.navbars a');

menuOpen.addEventListener('click', () => {
  navbar.style.top = "0"
})

menuClose.addEventListener('click', () => {
  navbar.style.top = "-110vh"
});

for (let i = 0; i < 3; i++) {
  menuList[i].addEventListener('click', () => {
    navbar.style.top = "-110vh";
  })
}
