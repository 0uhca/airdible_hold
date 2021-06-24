const selectElement = (element) => document.querySelector(element);

const navList = document.querySelector('.nav-list');
const navToggle = document.querySelector('.toggle');
const navLink = document.querySelector('.nav-link');
const happyEmoji = document.querySelector('.happy-emoji');

navToggle.textContent = 'O Menu'

selectElement ('.hamburger').addEventListener('click', () => {
    selectElement('.hamburger').classList.toggle('active');
    navList.classList.toggle('active');


// Create a media condition that targets viewports at least 768px wide

    const mediaQuery = window.matchMedia('(min-width: 768px)')

// Check if the media query is true

if (mediaQuery.matches) {
    document.querySelector('.centered').classList.toggle('translatey-40')
    document.querySelector('.review-x').classList.toggle('translatex-40')
    document.querySelector('.food-tray2').classList.toggle('translatexy')

    happyEmoji.classList.toggle('rotatey-180')
  }
    
    if (navList.classList.contains('active')) {
        navToggle.textContent = 'X Menu';
        navToggle.style.color = '#000';
    } else {
        navToggle.textContent = 'O Menu';
        navToggle.style.color = '#9E9E9E';
    }

});





