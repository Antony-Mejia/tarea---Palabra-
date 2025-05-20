const palabra = document.querySelector("#palabra");

document.addEventListener("mousemove", (e) => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  const palabraRect = palabra.getBoundingClientRect();
  const palabraX = palabraRect.left + palabraRect.width / 2;
  const palabraY = palabraRect.top + palabraRect.height / 2;

  const dx = mouseX - palabraX;
  const dy = mouseY - palabraY;
  const distancia = Math.hypot(dx, dy);

  if (distancia < 250) {
    const moverX = -dx / distancia * 30;
    const moverY = -dy / distancia * 30;

    let nuevoX = palabra.offsetLeft + moverX;
    let nuevoY = palabra.offsetTop + moverY;

    // Límites para que no se salga de la pantalla
    const maxX = window.innerWidth - palabra.offsetWidth;
    const maxY = window.innerHeight - palabra.offsetHeight;

    nuevoX = Math.max(15, Math.min(nuevoX, maxX));
    nuevoY = Math.max(15, Math.min(nuevoY, maxY));

    palabra.style.left = nuevoX + "px";
    palabra.style.top = nuevoY + "px";
  }
});

// Posición inicial
palabra.style.left = "50%";
palabra.style.top = "50%";
palabra.style.transform = "translate(-50%, -50%)";
