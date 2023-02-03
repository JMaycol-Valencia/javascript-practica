//SCOPE GLOBAL
var miNombre = "Maycol";

function nombreCompleto(nombre){
    //SCOPE LOCAL
    var miApellido = "Valencia"
    console.log(nombre + " " + miApellido);
}

nombreCompleto(miNombre);
//console.log(miApellido);   //Debido al scope nos dara error en esta linea de codigo