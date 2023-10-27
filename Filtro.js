// Obtener los botones y la lista de carros
const buttons = document.querySelectorAll('.category-button');
const carList = document.querySelector('.car-list');

// Agregar el evento click a cada botón
buttons.forEach(button => {
  button.addEventListener('click', function() {
    const category = this.getAttribute('data-category');

    // Mostrar solo los carros que coinciden con la categoría seleccionada
    carList.querySelectorAll('.car-item').forEach(car => {
      if (category === 'all' || car.classList.contains(category)) {
        car.classList.remove('hide');
      } else {
        car.classList.add('hide');
      }
    });
  });
});
