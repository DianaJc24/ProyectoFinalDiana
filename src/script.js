const miDiv = document.querySelector('.info-marcas');

window.addEventListener('scroll', () => {
  const rect = miDiv.getBoundingClientRect();

  // Si el elemento está en la pantalla y no tiene la clase 'visible'
  if (rect.top < window.innerHeight && !miDiv.classList.contains('visible')) {
    miDiv.classList.add('visible'); // Activa la animación de entrada
  } 

  // Si el elemento está fuera de la pantalla y tiene la clase 'visible'
  if (rect.top >= window.innerHeight && miDiv.classList.contains('visible')) {
    miDiv.classList.remove('visible'); // Activa la animación de salida
  }
});