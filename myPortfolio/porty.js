document.addEventListener('DOMContentLoaded', (event) => {
    const menuBtn = document.getElementById('btn-open-menu');
    const nav = document.querySelector('nav');

    menuBtn.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
});