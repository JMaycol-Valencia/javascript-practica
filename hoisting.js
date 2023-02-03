//LA CORRECTA CREACION DE VARIABLES ES LA SIG 
var miNombre;       //DECLARAMOS
miNombre = "maycol";        //INICIALIZAMOS


//LA SIG EJECUCION NOS ARROJARA UNDEFINED YA QUE 
//ACA SE APLICA EL HOISTING , LA VARIABLE SE DECLARA 
//ANTES DE EJECUTAR EL CODIGO
console.log(miApellido);
var miApellido = "valencia";




//HOISTING EN FUNCIONES
//LAS FUNCIONES SE DECLARAN ANTES QUE LAS VARIABLES
hola();

function hola(){
    console.log("Este es un saludo " + estudiante);
}

var estudiante = "vanesa";