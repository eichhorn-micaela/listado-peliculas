export const GuardarEnStorage = (key, item) =>{
    //conseguir los elementos del localStorage
   let elements = JSON.parse(localStorage.getItem(key));
   

    //Comprobar si es un array
    if (Array.isArray(elements)) {
       //añadir un item nuevo
       elements.push(item);
    }else{
     //crear un array con la nueva peli
     elements = [item];
    }

    //guardar en el localStorage
     localStorage.setItem(key, JSON.stringify(elements))
    //devolver objeto guardado
     return item;

 }