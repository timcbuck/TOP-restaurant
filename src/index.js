import './styles.css';
import loadHomePage from './home.js';
import loadMenuPage from './menu.js';


loadHomePage();

const btnHome = document.getElementById('btn-home');
const btnMenu = document.getElementById('btn-menu');
const btnContact = document.getElementById('btn-contact');

// TODO:
// If on home page, remove click event for btnHome
// If on menu page, remove click event for btnMenu
// If on contact page, remove click event for btnContact

btnHome.addEventListener('click', () => {
    loadHomePage();
});
btnMenu.addEventListener('click', () => {
    loadMenuPage();
});
btnContact.addEventListener('click', () => {
    
});

