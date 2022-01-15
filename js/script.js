const toggleMenu = document.getElementById('toggle-menu');
const navLinks = document.getElementById('nav-links');

toggleMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active')
})
