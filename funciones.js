//DECLARATIVAS
function miFuncionUno(){
    return 3;
}

function saludandoEstudiante(estudiante){
    console.log("Hola soy " + estudiante);
}

function sumarDosNumeros(a,b){
    var resultado = a + b;
    return resultado;
}

//EXPRESIONES
var miFuncionDos = function (a,b){     //a y b son los parametros
    return a + b
}


//EJECUCION
console.log(miFuncionUno());
console.log(miFuncionDos(8, 9));
saludandoEstudiante("maycol");
console.log(sumarDosNumeros(5, 6));