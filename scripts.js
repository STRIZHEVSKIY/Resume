addEventListener('DOMContentLoaded', () => event.preventDefault());

const pickMeButton = document.getElementById('pick-me-btn');
const linksNavBar = document.getElementById('links-navbar');


pickMeButton.addEventListener('click', () => {

     if (linksNavBar.style.display == '') {
        linksNavBar.style.display = 'flex';
        pickMeButton.style.display = 'none';
     } 
});
