const hamburgerButton = document.getElementById('hamburger-button');
const navMenu = document.getElementById('navegacao-principal');
const closeSidebarButton = document.getElementById('close-sidebar');

hamburgerButton.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});