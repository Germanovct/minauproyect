// Función para el scroll suave al hacer clic en el botón "Learn More"
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    const sectionTop = section.getBoundingClientRect().top;
    const headerHeight = document.querySelector('header').offsetHeight;
    const offset = headerHeight - 10; // Ajuste para la altura del encabezado
  
    window.scrollBy({
      top: sectionTop - offset,
      behavior: 'smooth'
    });
  }
  
  // Evento de clic en el botón "Learn More"
  const learnMoreBtn = document.querySelector('.btn-learn-more');
  learnMoreBtn.addEventListener('click', () => {
    scrollToSection('about'); // Cambiar 'about' por el identificador de la sección deseada
  });

  
  // Función para mostrar el popup de bienvenida
  function showWelcomePopup() {
    const popup = document.getElementById("welcome-popup");
    popup.style.display = "block";
  }
  
  // Evento de carga de la página para mostrar el popup de bienvenida solo en la primera visita
  window.onload = function() {
    if (!localStorage.getItem("visited")) {
      showWelcomePopup();
      localStorage.setItem("visited", "true");
    }
  };
  
  // Función para ocultar el popup de bienvenida cuando se hace clic en el botón de cerrar
  function closeWelcomePopup() {
    const popup = document.getElementById("welcome-popup");
    popup.style.display = "none";
  }
  

  document.addEventListener('DOMContentLoaded', () => {
    const welcomePopup = document.getElementById('welcome-popup');
    welcomePopup.style.display = 'block';
  });
  
  function closeWelcomePopup() {
    const welcomePopup = document.getElementById('welcome-popup');
    welcomePopup.style.display = 'none';
  }

  const languageCheckbox = document.getElementById("languageCheckbox");
const languageLabel = document.getElementById("languageLabel");

languageCheckbox.addEventListener("change", function () {
  if (this.checked) {
    // Si el botón está marcado, cambia el idioma a inglés
    document.documentElement.lang = "en";
    languageLabel.textContent = "English";
  } else {
    // Si el botón no está marcado, cambia el idioma a español
    document.documentElement.lang = "es";
    languageLabel.textContent = "Español";
  }
});
  