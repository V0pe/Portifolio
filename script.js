const menuOpen = document.getElementById('menu');
const navbar = document.querySelector('.navbar');
const menuClose = document.querySelector('.fa-times');

menuOpen.addEventListener('click', () => {
  navbar.style.top = '0';
});

menuClose.addEventListener('click', () => {
  navbar.style.top = '-98vh';
});
