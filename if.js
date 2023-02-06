//CONDICIONAL IF QUE SOLO CONSIDERA UN CASO
if(true){
    console.log("Se activo el IF");
}

if(18>10){
    console.log("Se activo el IF X2");
}

if(18<10){
    console.log("Se activo el IF X2");
}


//CONDICIONAL IF ELSE QUE CONCIDERA DOS CASOS
//si la condicion resulta TRUE se ejecuta la primera condicon
//de lo contrario continua a la sig condicion
if(10>9){
    console.log("Entramos al IF")
}else{
    console.log("Entarmos el ELSE")
}

if(10<9){
    console.log("Entramos al IF")
}else{
    console.log("Entarmos el ELSE")
}


//CONDICIONALES IF ELSE IF 
var edad = 18;
var edad2 = 17;

if(edad == 18){
    console.log("Puede votar y por primera vez ")
}else if(edad > 18 ){
    console.log("Bienvenido votante")
}else{
    console.log("Creo que no tiene suficiente edad para votar")
}

if(edad2 == 18){
    console.log("Puede votar y por primera vez ")
}else if(edad2 > 18 ){
    console.log("Bienvenido votante")
}else{
    console.log("Creo que no tiene suficiente edad para votar")
}

//OPERADOR TERNARIO
//ESTRUCTURA -> condition ? true : false;
var numero = 1;
var res = numero === 1 ? "El numero es 1" : "El numero no es uno";
console.log(res);    

var res2 = (0) ? "Se logro la suma" : "La suma tiene un error";
console.log(res2);