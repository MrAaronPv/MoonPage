setInterval(() =>{
    const sunMoon = document.querySelectorAll('.sun-main, .moon-main');
    sunMoon.forEach(img => img.classList.toggle('active'));
    
}, 6000);

setInterval(() => {
    const menssage = document.querySelectorAll('.mensaje-main');
    menssage.forEach(text => text.classList.toggle('active2'));
}, 10000)