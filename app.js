// Seleccionar todos los enlaces de la barra de navegación
const navLinks = document.querySelectorAll("nav a");

// Añadir un evento de clic a cada enlace
navLinks.forEach(link => {
  link.addEventListener("click", makeActive);
});

// Función para marcar el enlace seleccionado como activo
function makeActive(event) {
  navLinks.forEach(link => link.classList.remove("active"));
  event.target.classList.add("active");
}

// Seleccionar todos los enlaces de la barra de navegación
const navLinks = document.querySelectorAll("nav a");

// Añadir un evento de clic a cada enlace
navLinks.forEach(link => {
  link.addEventListener("click", smoothScroll);
});

// Función para desplazarse suavemente hasta la sección correspondiente
function smoothScroll(event) {
  event.preventDefault();
  const targetId = event.target.getAttribute("href");
  const targetSection = document.querySelector(targetId);
  targetSection.scrollIntoView({ behavior: "smooth" });
}

// Seleccionar el formulario de contacto
const contactForm = document.querySelector("#contact form");

// Añadir un evento de envío al formulario
contactForm.addEventListener("submit", submitForm);

// Función para enviar el formulario
function submitForm(event) {
  event.preventDefault(); // Prevenir el comportamiento por defecto del formulario

  // Recopilar los datos del formulario
  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const message = document.querySelector("#message").value;

  // Validar los datos del formulario
  if (!name || !email || !message) {
    alert("Por favor, rellene todos los campos del formulario");
    return;
  }
  // Hacer algo con los datos del formulario 
  // ...
}
