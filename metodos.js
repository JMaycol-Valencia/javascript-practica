var articulos = [
    {
        nombre : "jabon",
        precio : 5,
        tamaño : "pequeño",
        color : "azul",
        dietico : false
    },
    {
        nombre : "papas fritas",
        precio : 10,
        tamaño : "grande",
        color : "transparente",
        dietico : false
    },
    {
        nombre : "verduras",
        precio : 7,
        tamaño : "mediano",
        color : "verde",
        dietico : true
    },
] 

//FILTER -- nos retorna el objeto o los objetos que coincidan con nuestra busqueda
var item = articulos.filter(function(articulo){
    return articulo.precio <= 7;
});

//MAP -- nos retorna las propiedades de los objetos
var item2 = articulos.map(function(articulo){
    return articulo.nombre;
});

//FIND -- nos ayuda a encontrar algo dentro de un conjunto de objetos
//nos retorna el 1ER objeto que conincida con la busqueda
var item3 = articulos.find(function(articulo){
    return articulo.dietico == false;
});

/*EL UNICO QUE NO NOS DEVUELVE UN ARRAY NUEVO
SOLO NOS RETORNA NUESTRO ARRAY CON NUESTRA BUSQUEDA*/
/*FOREACH -- lo que nos facilita este metodo es en recorrer
nuestara buqueda y visualizarla*/
articulos.forEach(function(articulo){
    console.log(articulo.nombre);
});


/*SOME -- nos valida la busqueda y nos retorna un TRUE O FALSE
segun se lo que se encuentre en la busqueda*/
var articulosBaratos = articulos.some(function(articulo){
    return articulo.precio <= 8;
});



//EJECUCION
console.log(item);
console.log(item2);
console.log(item3);
console.log(articulosBaratos);