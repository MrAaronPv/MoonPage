const home = document.querySelector('.home-main');

const originalSrc = '../img/NuestrasFotos/Home.png';
const hoverSrc = '../img/NuestrasFotos/Home2.png';

home.addEventListener('mouseenter', () => {
    home.src = hoverSrc;
});

home.addEventListener('mouseleave', () => {
    home.src = originalSrc;
});

home.addEventListener('click', () => {
    window.location.href = '../SecondPage/pagesPort.html';
});
