addEventListener('DOMContentLoaded', () => event.preventDefault());

const pickMeButton = document.getElementById('pick-me-btn');
const linksNavBar = document.getElementById('links-navbar');


const burgerBtn = document.getElementById('burger-btn');

burgerBtn.addEventListener('click', () => {
   document.getElementById('header').classList.toggle('open');
});

pickMeButton.addEventListener('click', () => {

     if (linksNavBar.style.display == '') {
        linksNavBar.style.display = 'flex';
        pickMeButton.style.display = 'none';
     } 
});


