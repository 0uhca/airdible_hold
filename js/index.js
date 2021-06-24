const selectElement = (element) => document.querySelector(element);
const navList = document.querySelector('.nav-list');
const navToggle = document.querySelector('.toggle');
const navLink = document.querySelector('.nav-link');

navToggle.textContent = 'Menu'

selectElement ('.hamburger').addEventListener('click', () => {
    selectElement('.hamburger').classList.toggle('active');
    navList.classList.toggle('active');
    
    // if (navList.classList.contains('active')) {
    //     navToggle.textContent = 'Close Menu';
    // } else {
    //     navToggle.textContent = 'Open Menu';
    // }

    if (navList.classList.contains('active')) {
        navToggle.style.color = '#000';
    } else {
        navToggle.style.color = '#9E9E9E';
    }

});





