var carro = { marca: "Toyota", modelo: "2020" };

// es lo mismo que:
var carro;
carro = { marca: "Toyota", modelo: "2020" };
// hasta ahora {} esta siendo parte de la ramificacion de carro
// y carro de la raiz, pertenece al grupo de objetos alcanzables

carro = "Jeremias";
// ahora el {} no pertenece a la ramificacion de carro y por lo tanto
// está "suelto", por lo tanto, el garbage collection lo barre
