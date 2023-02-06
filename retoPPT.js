function juego(a,b){
    var res = " ";
    if(a == "piedra" && b == "papel"){
        res = "gana papel";  
        console.log(res);
    }else if(a == "piedra" && b == "tijera"){
        res = "gana piedra";
        console.log(res);
    }else if(a == "tijera" && b == "papel"){
        res = "gana tijera";
        console.log(res);
    }else if(a == "tijera" && b == "piedra"){
        res =  "gana piedra";
        console.log(res);
    }else if(a == "papel" && b == "piedra"){
        res = "gana papel";
        console.log(res);
    }else if(a == "papel" && b == "tijera"){
        res = "gana tijera";
        console.log(res);
    }else if(a == b){
        res = "Se repite el juego , sacaron lo mismo";
        console.log(res);
    }else{
        res = "ingrese bien los datos";
        console.log(res);
    }
}

function inicio(){
    console.log("Inicia el juego");
    juego("papel","papel");
}

inicio();