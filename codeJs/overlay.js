const btnAbrir = document.getElementById('btn__abrir-1');
const overlay = document.getElementById('overlay-1');
const btnCerrar = document.getElementById('btn__cerrar-1');
const overlayContent = document.querySelector('.overlay-content');

btnAbrir.addEventListener('click', () => {
  overlay.classList.add('active');
});

btnCerrar.addEventListener('click', () => {
  overlay.classList.remove('active');
});

overlayContent.addEventListener('click', (e) => {
  e.stopPropagation();
});

overlay.addEventListener('click', (e) => {
  if (e.target === overlay) overlay.classList.remove('active');
});


const btnAbrir2 = document.getElementById('btn__abrir-2');
const overlay2 = document.getElementById('overlay-2');
const btnCerrar2 = document.getElementById('btn__cerrar-2');
const overlayContent2 = document.querySelector('.overlay-content');

btnAbrir2.addEventListener('click', () => {
  overlay2.classList.add('active');
});

btnCerrar2.addEventListener('click', () => {
  overlay2.classList.remove('active');
});

overlayContent2.addEventListener('click', (e) => {
  e.stopPropagation();
});

overlay2.addEventListener('click', (e) => {
  if (e.target === overlay2) overlay2.classList.remove('active');
});


const btnAbrir3 = document.getElementById('btn__abrir-3');
const overlay3 = document.getElementById('overlay-3');
const btnCerrar3 = document.getElementById('btn__cerrar-3');
const overlayContent3 = document.querySelector('.overlay-content');

btnAbrir3.addEventListener('click', () => {
  overlay3.classList.add('active');
});

btnCerrar3.addEventListener('click', () => {
  overlay3.classList.remove('active');
});

overlayContent3.addEventListener('click', (e) => {
  e.stopPropagation();
});

overlay3.addEventListener('click', (e) => {
  if (e.target === overlay3) overlay3.classList.remove('active');
});
