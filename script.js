function abrirModal(src, titulo = "Título de la obra", descripcion = "Descripción de la obra", concepto = "") {
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modal-img");
  const tituloObra = document.getElementById("titulo-obra");
  const descripcionObra = document.getElementById("descripcion-obra");
  const conceptoObra = document.getElementById("concepto-obra");

  modalImg.src = src;                 // imagen
  tituloObra.textContent = titulo;    // título
  descripcionObra.textContent = descripcion; // descripción
  conceptoObra.innerHTML = concepto;       // descripción conceptual

  modal.style.display = "flex";       // mostrar modal
}

function cerrarModal() {
  document.getElementById("modal").style.display = "none";
}

// Cerrar con tecla ESC
document.addEventListener("keydown", function(e) {
  if (e.key === "Escape") cerrarModal();
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

/* GALERÍA - Modal para imagen completa */
document.addEventListener("DOMContentLoaded", function () {

  const modal = document.getElementById("modal-img-full");
  const modalImg = document.getElementById("imagen-completa");
  const cerrar = document.querySelector(".cerrar-full");

  // Abrir imagen
  document.querySelectorAll(".galeria-galeria img").forEach(img => {
    img.addEventListener("click", function () {
      modal.style.display = "flex";
      modalImg.src = this.src;
    });
  });

  // Cerrar al hacer click en X
  cerrar.addEventListener("click", function () {
    modal.style.display = "none";
  });

  // Cerrar al hacer click fuera de la imagen
  modal.addEventListener("click", function (e) {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });

  // Cerrar con ESC
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      modal.style.display = "none";
    }
  });

});