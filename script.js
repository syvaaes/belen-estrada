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
// Cerrar al hacer clic fuera de la imagen
function toggleBio() {
  if (window.innerWidth <= 767) {
    const preview = document.querySelector('.preview');
    const full = document.querySelector('.full');

    preview.style.display = 'none';
    full.style.opacity = '1';
    full.style.position = 'static';
  }
}
