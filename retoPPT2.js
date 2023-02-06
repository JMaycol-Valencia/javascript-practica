//CODIGO QUE SOLO EJECUTA EN CONSOLA DEL NAVEGADOR
function inicio(){
    var anuncio1 = prompt("Jugador 1 ,con que jugara: piedra, papel o tijera");
    var jugador1 = anuncio1;
    var anuncio2 = prompt("Jugador 2 ,con que jugara: piedra, papel o tijera");
    var jugador2 = anuncio2;

    switch(true){
        case(jugador1 == "piedra" && jugador2 == "papel"):
        console.log("gana jugador 2 - papel");
        break;
        case(jugador1 == "piedra" && jugador2 == "tijera"):
        console.log("gana jugador 1 - piedra");
        break;
        case(jugador1 == "papel" && jugador2 == "piedra"):
        console.log("gana jugador 1 - papel");
        break;
        case(jugador1 == "papel" && jugador2 == "tijera"):
        console.log("gana jugador 2 - tijera");
        break;
        case(jugador1 == "tijera" && jugador2 == "papel"):
        console.log("gana jugador 1 - tijera");
        break;
        case(jugador1 == "tijera" && jugador2 == "piedra"):
        console.log("gana jugador 2 - piedra");
        break;
        case(jugador1 == jugador2):
        console.log("se repite el juego");
        break;
        default:
        console.log("Error en la escritura");
    }
}

inicio();