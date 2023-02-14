function solution(estudiantes, deathCount, nuevo) {
    if (deathCount == 0) {
      estudiantes.push(nuevo); 
      for (var estudiante of estudiantes) {
        console.log(estudiante);
      }
    } else {
        while(deathCount > 0){
            estudiantes.pop();
            deathCount--;
        }
        estudiantes.push(nuevo);
      for(estudiante of estudiantes){
        console.log(estudiante);
      }
    }
  }
  
//   solution(["Nico", "Zule"], 0, "Santi")
//  solution(["Juan", "Juanita", "Daniela"], 1, "Julian")
//   solution(["Nath", "Luisa", "Noru"], 2, "Cami")