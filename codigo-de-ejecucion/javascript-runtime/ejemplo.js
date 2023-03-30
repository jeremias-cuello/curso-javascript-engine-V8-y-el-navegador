/**
 * JS hace una tarea a la vez y esto hace que se pueda comportar lento o nos dé tiempos de espera un poco largos
 * supongamos que estamos en un lugar donde hacen comida
 */
// hacen
console.log('taco 1');
console.log('taco 2');
console.log('torta'); // hacer la torta es un proceso largo
console.log('taco 3');

// el del lugar de la comida en realidad primero hace los tres tacos
// y luego hace la torta porque los tacos tardan menos que la torta

// JS, en este caso, hace las cosas en el orden de como se las demos
