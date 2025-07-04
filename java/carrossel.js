const slides = document.querySelectorAll('.slide');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let currentSlide = 0;
let totalSlides = slides.length;

// Função para mostrar o slide atual
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) {
      slide.classList.add('active');
    }
  });
}

// Navegação para frente
next.addEventListener('click', () => {
  currentSlide = (currentSlide + 1) % totalSlides;
  showSlide(currentSlide);
});

// Navegação para trás
prev.addEventListener('click', () => {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  showSlide(currentSlide);
});

// Auto-rotação (opcional)
setInterval(() => {
  currentSlide = (currentSlide + 1) % totalSlides;
  showSlide(currentSlide);
}, 5000); // troca a cada 5 segundos
