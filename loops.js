//CREACION DEL ARRAYS A RECORRER
var listas = ["maycol","vanesa","alison","camila","carlos"];

//FUNCION ITERATIVA
function saludar(persona){
    console.log(`Hola ${persona}`)
}

//CICLO FOR CONSTUIDO POR TRES PARTES : 
//1ro DECLARACION E INICIALIZACION DEL CONTADOR
//2do CONDICION DEL FOR
//3ro SUMA A NUESTRO CONTADOR POR CADA ITERACION

//CON FUNCION
for(var i = 0;i < listas.length; i++){
    saludar(listas[i]);
}

//SIN FUNCION
for(var i = 0; i < listas.length; i++){
    console.log("hola " + listas[i]);
}

//FOR OF Y FOR IN
//for of nos recorre por el dato en la poscion
for(var estudiante of listas){
    console.log(`Hola, ${estudiante}`);
}

//for in nos retorna el indice o posicion del dato
for(var estudiante in listas){
    console.log(`Adios, ${listas[estudiante]}`);
}



//WHILE
var estudiantes = ["maycol", "vanesa", "camila", "carlos", "alison"];


function saludando(estudiante){
    console.log(`Bienvenido al colegio, ${estudiante}`)
}

while(estudiantes.length > 0){
    console.log(estudiantes);
    var estudiante = estudiantes.shift();
    saludando(estudiante);
}
