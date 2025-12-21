const pics = document.querySelectorAll('.pic-1, .pic-2, .pic-3, .pic-4');

const overlays = document.querySelectorAll('.img-pic-1, .img-pic-2, .img-pic-3, .img-pic-4');

pics.forEach((pic, index) => {
  pic.addEventListener('click', () => {
    overlays[index].classList.add('active');
  });
});

overlays.forEach(overlay => {
  overlay.children[0].addEventListener('click', e => e.stopPropagation());
});

overlays.forEach(overlay => {
  overlay.addEventListener('click', e => {
    if (e.target === overlay) overlay.classList.remove('active');
  });
});
