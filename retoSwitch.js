//SOLUCION 1

// export function solution(article) {
//     switch (true) {
//       case (article == "computadora"):
//         console.log("Con mi computadora puedo programar usando JavaScript");
//         break;
//       case (article == "celular"):
//         console.log("En mi celular puedo aprender usando la app de Platzi");
//         break;
//       case (article == "cable"):
//         console.log("¡Hay un cable en mi bota!");
//         break;
//       default:
//         console.log("Artículo no encontrado");
//     }
//   }
  
// solution('computadora')
// solution('celular')
// solution('cable')
// solution('ornitorrinco')



//SOLUCION 2
function solution(article) {
    switch (article) {
        case ("computadora"):
        console.log("1");
        return "Con mi computadora puedo programar usando JavaScript";
        break;
        case ("celular"):
        console.log("2");
        return "En mi celular puedo aprender usando la app de Platzi";
        break;
        case ("cable"):
        console.log("3");
        return "¡Hay un cable en mi bota!";
        break;
        default:
        return"Artículo no encontrado";
    }
}
  
  
  solution('computadora')
  solution('celular')
  solution('cable')
  solution('ornitorrinco')
  