// Obtener elementos del DOM
const verDetallesButton = document.getElementById("verDetalles");
const volverButton = document.getElementById("volver");
const tarjeta = document.querySelector(".tarjeta");

// Función para voltear la tarjeta
verDetallesButton.addEventListener("click", () => {
  // tarjeta.style.transform = "rotateY(180deg)"; // Voltear la tarjeta
  alert("Click en detalles");
});

// Función para volver a la cara frontal
volverButton.addEventListener("click", () => {
  // alert("Click en ");
  tarjeta.style.transform = "rotateY(0deg)"; // Volver a la cara inicial
});
