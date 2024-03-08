const toggleButton = document.querySelector('.toggle-btn');
const navbarLinks = document.querySelector('.navbar .links');
const menuIcons = document.querySelectorAll('.toggle-btn i');

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
});

toggleButton.addEventListener('click', () => {
    menuIcons.forEach(icon => {
        icon.classList.toggle('active');
    });
});