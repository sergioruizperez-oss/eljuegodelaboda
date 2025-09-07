const targetDate = new Date("2025-09-07T14:10:00+02:00");

const countdownEl = document.getElementById("countdown");
const mensajeEl = document.getElementById("mensaje");
const tituloEl = document.getElementById("titulo");

const frases = [
  "La paciencia es amarga, pero sus frutos son dulces. (Jean-Jacques Rousseau)",
  "La paciencia es la fortaleza del débil y la impaciencia, la debilidad del fuerte. (Immanuel Kant)",
  "La paciencia es un árbol de raíz amarga pero de frutos muy dulces. (Proverbio persa)",
  "Un momento de paciencia puede preservar gran desastre, un momento de impaciencia puede arruinar toda una vida. (Proverbio chino)",
  "La paciencia es la mejor medicina para todos los problemas. (Plauto)",
  "Con paciencia y perseverancia se alcanza todo. (Ralph Waldo Emerson)",
  "La paciencia es la clave para la alegría. (Rumi)",
  "La paciencia es la compañera de la sabiduría. (San Agustín)"
];

const cita = frases[Math.floor(Math.random() * frases.length)];

function updateCountdown() {
  const now = new Date();
  const diff = targetDate - now;

  if (diff <= 0) {
    clearInterval(timer);
    mostrarMensajeFinal();
    return;
  }

  let textoTiempo = "";

  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const m = Math.floor((diff / (1000 * 60)) % 60);

  if (d >= 1) {
    textoTiempo = `${d} días, ${h} horas, ${m} minutos`;
  } else if (h >= 1) {
    textoTiempo = `${h} horas, ${m} minutos`;
  } else {
    textoTiempo = `${m} minutos`;
  }

  tituloEl.textContent = "¡Cotilla!";
  countdownEl.textContent =
    `Te hemos dicho que todavía no puedes abrir el sobre. ` +
    `Tienes que esperar ${textoTiempo} para saber más.\n\n` +
    `"${cita}"`;
}

function mostrarMensajeFinal() {
  window.location.href = "final.html";
}

const timer = setInterval(updateCountdown, 1000);
updateCountdown();