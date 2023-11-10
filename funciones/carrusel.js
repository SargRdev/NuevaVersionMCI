// Auto-carrusel
const carouselContainer = document.querySelector('.carousel-container');

function startCarousel() {
  setInterval(() => {
    carouselContainer.style.animationPlayState = 'running';
  }, 100);
}

startCarousel();
