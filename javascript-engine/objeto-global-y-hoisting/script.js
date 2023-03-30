/* // Hoisting
console.log(nombre);
apellido();

var nombre = 'Jeremias';
function apellido() {
  console.log('Cuello');
}
// el hoisting no es una buena practica

// otro ejemplo de hoisting
// var nombre; */

console.log(nombre); // Identifier 'nombre' has already been declared
apellido();

// let nombre;

// const nombre = 'Jeremias';
function apellido() {
  console.log('Cuello');
}
// el hoisting no es una buena practica
