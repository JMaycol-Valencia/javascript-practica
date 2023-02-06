/*CREAMOS E INSTANCIAMOS EL ARRYA , POR DEFECTO PUEDE
VENIR VACIO O CON DATOS*/
var lista = [];

//PUSH() para agregar datos
lista.push("uno");
lista.push("dos");
lista.push("tres");
console.log(lista);

//POP() para eliminar el ultimo dato del array
lista.pop();
console.log(lista);

//UNSHIFT() agrega un dato al inicio del array
lista.unshift("cero");
console.log(lista);

//SHIFT() elimina el primero elemento del array
lista.shift();
console.log(lista);

//INDEXOF() obtener la posicion de un elemento del array
console.log(lista.indexOf("dos"));

//LENGTH() obtenemos el tamaño de nuestro arrays
console.log(lista.length);
