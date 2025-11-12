addEventListener('DOMContentLoaded', () => event.preventDefault());

const pickMeButton = document.getElementById('pick-me-btn');
const linksNavBar = document.getElementById('links-navbar');


const burgerBtn = document.getElementById('burger-btn');

burgerBtn.addEventListener('click', () => {
  
   setTimeout(() => {
       document.getElementById('header').classList.toggle('open');
       document.getElementById('nav-list').style.display = 'flex';}, 30)
});

pickMeButton.addEventListener('click', () => {

     if (linksNavBar.style.display == '') {
        linksNavBar.style.display = 'flex';
        pickMeButton.style.display = 'none';
     } 
});


