// Fecha/hora objetivo de la cuenta atrás
// Ajusta a la fecha que quieras (año, mes-1, día, hora, min, seg)
const targetDate = new Date(2025, 8, 5, 12, 0, 0); // 5 septiembre 2025 12:00

const countdownEl = document.getElementById("countdown");
const mensajeEl = document.getElementById("mensaje");
const encuestaEl = document.getElementById("encuesta");
const tituloEl = document.getElementById("titulo");

function updateCountdown() {
  const now = new Date();
  const diff = targetDate - now;

  if (diff <= 0) {
    clearInterval(timer);
    mostrarMensaje();
    return;
  }

  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const m = Math.floor((diff / (1000 * 60)) % 60);
  const s = Math.floor((diff / 1000) % 60);

  countdownEl.textContent = `${d}d ${h}h ${m}m ${s}s`;
}

function mostrarMensaje() {
  tituloEl.textContent = "¡Ya ha llegado el momento!";
  countdownEl.classList.add("hidden");
  mensajeEl.classList.remove("hidden");
  mensajeEl.innerHTML = `
    <p>Únete al grupo de WhatsApp:</p>
    <p><a href="https://chat.whatsapp.com/XXXX" target="_blank">Entrar al grupo</a></p>
  `;

  // mostrar encuesta después
  encuestaEl.classList.remove("hidden");
}

encuestaEl.addEventListener("submit", (e) => {
  e.preventDefault();
  encuestaEl.classList.add("hidden");
  mensajeEl.innerHTML = "<p>Analizando tu respuesta...</p>";

  setTimeout(() => {
    mensajeEl.innerHTML = "<p>Gracias. Recibirás más novedades en el grupo.</p>";
  }, 2000);
});

const timer = setInterval(updateCountdown, 1000);
updateCountdown();