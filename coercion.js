//COERCION IMPLICITA
var a = 4 + "7";
var b = 4 * "7";
console.log(b);
console.log(typeof(a));


//COERCION EXPLICITA
var a = 20;             // DECLARAMOS E INICIALIZAMOS EL VALOR COMO NUMERO
var b = String(a);      //LO CONVERTIMOS A UN STRING
var d = Number(b);      //LO VOLVEMOS A CONVERTIR A UN NUMERO

console.log(b)
console.log(typeof b)
console.log(d);
console.log(typeof d);
