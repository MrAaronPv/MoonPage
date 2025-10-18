setInterval(() => {
  const stars = document.querySelectorAll('.star-class, .star-class-2');
  const fondos = document.querySelectorAll('.fondo');
  const hearts = document.querySelectorAll('.heart-class');

  stars.forEach(img => img.classList.toggle('active'));

  setTimeout(() => {
    fondos.forEach(img => img.classList.toggle('active'));
  }, 400);

  setTimeout(() => {
    hearts.forEach(img => img.classList.toggle('active'));
  }, 1200);

}, 4000);