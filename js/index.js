const selectElement = (element) => document.querySelector(element);

selectElement ('.hamburger').addEventListener('click', () => {
    selectElement('.hamburger').classList.toggle('.active')
});