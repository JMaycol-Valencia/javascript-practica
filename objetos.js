//OBJETOS
//DECLARAMOS UN OBJETO E INICIALIZAMOS 
//INICIALIZAMOS LAS PROPIEDADES Y METODOS
var objeto = {
    nombre : "maycol",
    edad : 25,
    sexo : "masculino",
    anioNacimiento : 1997,
    detalleDelAuto : function(){
        console.log(`Hola ${this.nombre}, con edad ${this.edad}`);
    }
}


//FUNCION CONSTRUCTORA
function auto(marca, modelo, anio){
    this.marca = marca;     
    this.modelo = modelo;
    this.anio = anio;
}

//DECLARAMOS Y CREAMOSEL NUEVO OBJETO

var autoMaycol = new auto("Toyota", "Todo terreno", 2019);
var autoVanesa = new auto("Ford", "4 x 4", 2020);
var autoCarlos = new auto("Susuki", "Vagoneta", 2021);

//VISUALIZAMOS EL OBJETO Y SUS PROPIEDADES
autoMaycol;
autoVanesa;
autoCarlos;



//PARA LLAMAR A LAPRIPIEDAD DEL OBJETO, DEBEMOS LLAMAR CON EL NOMBRE
//DEL OBJETO SEGUIDO DE UN PUNTO . Y SU PROPIEDAD
console.log(objeto.nombre);
console.log(objeto.anioNacimiento);
objeto.detalleDelAuto();