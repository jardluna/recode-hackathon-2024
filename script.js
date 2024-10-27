function scrollToForm() {
  document.getElementById('form-participar').scrollIntoView({ behavior: 'smooth' });
}

function handleSubmit(event) {
  event.preventDefault();
  const formData = {
      nome: document.getElementById('nome').value,
      email: document.getElementById('email').value,
      telefone: document.getElementById('telefone').value,
      cidade: document.getElementById('cidade').value,
      tipoAjuda: document.getElementById('tipo-ajuda').value,
      mensagem: document.getElementById('mensagem').value
  };

  console.log('Dados do formulário:', formData);
  alert('Obrigado por se cadastrar! Entraremos em contato em breve.');
  event.target.reset();
}

// Carrossel
let currentSlide = 0;
const totalSlides = 3;
const carousel = document.querySelector('.carousel');
const dotsContainer = document.querySelector('.carousel-dots');

// Criar dots para navegação
for (let i = 0; i < totalSlides; i++) {
  const dot = document.createElement('div');
  dot.classList.add('dot');
  dot.onclick = () => goToSlide(i);
  dotsContainer.appendChild(dot);
}

// Atualizar dots ativos
function updateDots() {
  document.querySelectorAll('.dot').forEach((dot, index) => {
      dot.classList.toggle('active', index === currentSlide);
  });
}

// Função para mover o carrossel
function moveCarousel(direction) {
  currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
  updateCarousel();
}

// Ir para um slide específico
function goToSlide(index) {
  currentSlide = index;
  updateCarousel();
}

// Atualizar posição do carrossel
function updateCarousel() {
  carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
  updateDots();
}

// Inicializar o carrossel
updateDots();

// Autoplay
setInterval(() => moveCarousel(1), 5000);

function initMap() {
  console.log('Inicializar mapa com as áreas:', areasParaArborizar);
}
  