const menuButton = document.getElementById('menu-btn');

const mobileMenu = document.getElementById('mobile-menu');

menuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden')
});

const menuLinks = mobileMenu.querySelectorAll('a');

menuLinks.forEach(link => {
    link.addEventListener('click', ()=>{
        mobileMenu.classList.add('hidden')
    });
});