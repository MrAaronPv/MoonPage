const images = document.querySelectorAll(".fotos__content img");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target); 
    }
  });
}, {
  threshold: 0.2 
});

images.forEach(img => observer.observe(img));