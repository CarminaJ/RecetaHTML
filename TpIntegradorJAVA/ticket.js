const sindescuento = 1;
const estudiante = 0.8;
const trainee = 0.5;
const junior = 0.15;

const botonCalcular = document.getElementById('botonCalcular');
const cantidadEntradas = document.getElementById('cantidadEntradas');
const descuentosSelect = document.getElementById('inputState');
const totalCompra = document.getElementById('totalCompra');

const descuentosArray = [sindescuento, estudiante, trainee, junior];

function resumen() {
  const categoriaSeleccionada = parseFloat(descuentosArray[descuentosSelect.selectedIndex]);

  const cantidad = parseInt(cantidadEntradas.value);

  const total = cantidad * 200 * categoriaSeleccionada;

  totalCompra.innerHTML = `Total a Pagar: $${total.toFixed(2)}`;
}

