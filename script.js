function abrirModal(src) {
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modal-img");

  modalImg.src = src;
  modal.style.display = "flex";
}

function cerrarModal() {
  document.getElementById("modal").style.display = "none";
}

// Cerrar con tecla ESC
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    cerrarModal();
  }
});

// Toggle para móviles/tablets
document.addEventListener('DOMContentLoaded', () => {
  const wrappers = document.querySelectorAll('.sobre-mi-wrapper');

  wrappers.forEach(wrapper => {
    wrapper.addEventListener('click', () => {
      // Solo en dispositivos sin hover (móvil / tablet)
      if (window.matchMedia('(hover: none)').matches) {
        wrapper.classList.toggle('active');
      }
    });
  });
});
