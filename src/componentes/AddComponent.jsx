import React, {useState} from 'react';
import {GuardarEnStorage} from '../helpers/GuardarEnStorage';

const AddComponent = ({setListadoState}) => {
  const titleComponent= "Añadir pelicula"
  const [peliState, setPeliState] = useState({
    title: '',
    description: ''
  });
  const { title, description} = peliState

  const conseguirDatosForm = e => {
     e.preventDefault();
     //conseguri datos del formulario
     let target = e.target;
     let title = target.title.value;
     let description = target.description.value;

     //crear objeto de pelicula
     let peli = {
      id: new Date().getTime(),
      title,
      description
     };

     //guardar estado
      setPeliState(peli);
     
      //actualizar el estado del listado principal
       setListadoState(elements=>{
           return [...elements, peli];
       });

      //guardar en localStorage
      GuardarEnStorage('pelis', peli)
      

       
  }
  

    return (
        <div className="add">
          <h3 className="title">{titleComponent}</h3>
           <strong>
            {(title && description) && 'Haz creado la pelicula: '+ title}
           </strong>
          
          <form onSubmit={conseguirDatosForm}>
            <input 
            type="text" 
            name="title" 
            id="title" 
            placeholder="titulo"
             />

            <textarea 
            placeholder="descripcion" name="description" 
            id="description" ></textarea>

            <input 
            type="submit" 
            id='save'
            value="Guardar" />
          </form>
        </div>
    );
}

export default AddComponent;
