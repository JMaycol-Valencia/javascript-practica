/*PUSH() -- nos ayuda a agregar datos a nuestro array ,
siempre en la ultima posicion */
var nombres = ["maycol", "vanesa", "camila", "alison"];

function agregar(){
    console.log(nombres);
    nombres.push("jesus", "maria", "jeremias");
    console.log(nombres);
}

//EJECUCION
agregar();


/*SHIFT() -- elimina el primer elemento de nuestro array */
var apellidos = ["valencia", "andrade", "mendoza", "vergara"];
function eliminarPrimero(){
    console.log(apellidos);
    apellidos.shift();
    console.log(apellidos);
}

//EJECUCION
eliminarPrimero()


/*POP() -- este metodo nos ayuda a eliminar el ultimo elemento
de nuestro arrays */
var edades = [25, 25, 19, 43, 22];
function eliminarUltimo(){
    console.log(edades);
    edades.pop();
    console.log(edades);
}

//EJECUCION
eliminarUltimo()




/*RETO
crear una funcion que filtre un array de objetos y nos retorne solo los
objetos que cumplan con la condicion que le asignemos en este caso
que los objetos tengan matricula dentro de sus atributos
*/

export function solution(cars) {
    return cars.filter(function (car) {
        return car.matricula != null;
    });
  }

var cars = [
    {
        color: "rojo",
        matricula: "123abc"
    },
    {
        color: "azul",
        matricula: "900uuu",
        ruedas: 4
    },
    {
        color: "dorado",
        ruedas: 4
    }
];

//EJECUCION
console.log(solution(cars));
