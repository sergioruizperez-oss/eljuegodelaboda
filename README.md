# Proyecto Vercel - Cuenta atrás personalizada

Este proyecto muestra:

- Un mensaje inicial con **¡Cotilla!**, cuenta atrás y una **cita aleatoria sobre la paciencia**.
- Adaptación del formato de tiempo:
  - Si faltan ≥ 1 día → muestra días, horas y minutos.
  - Si faltan < 24h → solo horas y minutos.
  - Si faltan < 60m → solo minutos.
- Cuando la cuenta atrás llega a **21 septiembre 2025 a las 14:00 (hora de Madrid)**,
  aparece un mensaje final con enlace al grupo de WhatsApp.

## 🚀 Despliegue en Vercel

1. Sube los archivos a un repositorio en GitHub.
2. Entra en [https://vercel.com](https://vercel.com) y crea un nuevo proyecto enlazando tu repo.
3. Vercel detectará automáticamente el proyecto estático y lo publicará.

## ⚙️ Personalización

- Cambia la fecha en `script.js` (`targetDate`).
- Sustituye el enlace de WhatsApp en la función `mostrarMensajeFinal()`.
- Añade o modifica frases en la lista `frases`.
