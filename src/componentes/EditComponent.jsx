import React, {useState} from 'react';

const EditComponent = ({peli, conseguirpeliculas, setEditar, setListadoState}) => {

    const titleComponent = 'Editar pelicula'
    const guardarEdicion = (e, id) => {
        e.preventDefault();
        //conseguir el target del evento
        let target = e.target;

        //buscar el id del objeto de la peli a actualizar
        const pelis_almacenadas = conseguirpeliculas();
        const index = pelis_almacenadas.findIndex(peli => peli.id === id);

        //crear objeto con el id de ese indice
        let peli_actualizada = {
            id,
            title: target.title.value,
            description: target.description.value
        }

        //actualizar el elemento con ese indice
        pelis_almacenadas[index] =peli_actualizada

        
        //guardar localstorage
        localStorage.setItem('pelis', JSON.stringify(pelis_almacenadas));

        //actualizar estado
        setListadoState(pelis_almacenadas)
        setEditar(0)
    }
    return (
        <div className='edit_form'>
            <h3 className='title'>{titleComponent}</h3>
            <form onSubmit={e => guardarEdicion(e, peli.id)}>
            <input 
            type="text" 
            name="title" 
            className='edit_title' 
            defaultValue={peli.title}
             />

           <textarea 
           defaultValue={peli.description}
           name="description" 
           className='edit_description' />
            
            <input 
            type="submit" 
            className='edit'
            value="Editar" />
          </form>
        </div>
    );
}

export default EditComponent;
