// Obtener elementos del DOM
const verDetallesButton=document.getElementById('verDetalles');
const volverButton=document.getElementById('volver');
const tarjeta=document.querySelector('.tarjeta');
const fr=document.querySelector('.frontal');
const pos = document.querySelector('.posterior');
// Función para voltear la tarjeta hacia la cara posterior
verDetallesButton.addEventListener('click', () => {
  fr.style.transform = 'rotateY(180deg)';
  pos.style.transform = 'rotateY(0deg)';
});

// Función para volver a la cara frontal
volverButton.addEventListener('click', () => {
  fr.style.transform = 'rotateY(0deg)';
  pos.style.transform = 'rotateY(180deg)';
});