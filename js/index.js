const selectElement = (element) => document.querySelector(element);

const navList = document.querySelector('.nav-list');
const navToggle = document.querySelector('.toggle');
const navLink = document.querySelector('.nav-link');

navToggle.textContent = 'O Menu'

selectElement ('.hamburger').addEventListener('click', () => {
    selectElement('.hamburger').classList.toggle('active');
    navList.classList.toggle('active');

    if (navList.classList.contains('active')) {
        navToggle.textContent = 'X Menu';
        navToggle.style.color = '#fff';
    } else {
        navToggle.textContent = 'O Menu';
        navToggle.style.color = '#B0A1BA';
    }


// Create a media condition that targets viewports at least 768px wide

    const mediaQuery = window.matchMedia('(min-width: 768px)')

// Check if the media query is true

if (mediaQuery.matches) {
    document.querySelector('.centered').classList.toggle('translatey-40')
    document.querySelector('.review-x').classList.remove('animate__animated')
    document.querySelector('.review-x').classList.toggle('translatex-40')
    document.querySelector('.food-tray2').classList.toggle('translatexy')

    document.querySelector('.happy-emoji').classList.remove('animate__animated')
    document.querySelector('.happy-emoji').classList.toggle('rotatey-180')
  }

});


// animate__animated animate__fadeInLeft animate__delay-3s

const toggleModal = document.querySelector('.order-now');
const menuOrderNow = document.querySelector('.menu-order');
const modalOverlay = document.querySelector('.overlay');

const centeredCTA = document.querySelector('.centered-cta');

toggleModal.addEventListener('click', () => {
    modalOverlay.style.display = 'block';
    centeredCTA.style.display = 'block';
})

menuOrderNow.addEventListener('click', () => {
    modalOverlay.style.display = 'block';
    centeredCTA.style.display = 'block';
})


modalOverlay.addEventListener('click', () => {
    modalOverlay.style.display = 'none';
    centeredCTA.style.display = 'none';
})





