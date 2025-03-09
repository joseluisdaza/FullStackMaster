// Obtener elementos del DOM
const verDetallesButton = document.getElementById("verDetalles");
const volverButton = document.getElementById("volver");
const tarjeta = document.querySelector(".tarjeta");
const frontal = document.getElementById("caraFrontal");
const posterior = document.getElementById("caraPosterior");

// Función para voltear la tarjeta
verDetallesButton.addEventListener("click", () => {
  frontal.style.transform = "rotateY(180deg)";
  posterior.style.transform = "rotateY(0deg)";
});

// Función para volver a la cara frontal
volverButton.addEventListener("click", () => {
  posterior.style.transform = "rotateY(180deg)";
  frontal.style.transform = "rotateY(0deg)";
});
