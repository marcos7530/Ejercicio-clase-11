/*
¡Atención, equipo de inteligencia! Hemos recibido un reporte de un importante hackeo en nuestra red de computadoras. 
Necesitamos su ayuda para encontrar al responsable del ataque y detenerlo antes de que cause más daño. 
Se sabe que el hacker es parte de una lista de los 10 delincuentes más buscados. 
Además sabemos que tiene fanatismo por dejar “su marca” en los registros, 
creemos que se llama Juan o Pedro, y que sus números favoritos son el 3 y el 7. 
Encuentren al hacker lo más rápido que puedan, el destino de todos está en sus manos. 


*/
  let lista= ['Juan', 'Santiago', 'Luis', 'Carlos', 'Miguel', 'Jorge', 'Fernando', 'Pedro', 'Andrés', 'Daniel'];

  let nombre1='Juan';
  let nombre2='Pedro';

  let numeroFavorito1=3;
  let numeroFavorito2=7;

  for (let index = 0; index < lista.length; index++) {

    const element = lista[index];

    if (index==numeroFavorito1 && element== 'Juan' || 
        index==numeroFavorito1 && element== 'Pedro'|| 
        index==numeroFavorito2 && element== 'Juan' || 
        index==numeroFavorito2 && element== 'Pedro') {
        console.log("El hacker es tiene el indice " + index +" en la lista y se llama "+ element);
    }



    
  }