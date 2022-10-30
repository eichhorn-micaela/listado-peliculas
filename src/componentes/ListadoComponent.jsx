import React, {useEffect, useState} from 'react';
import EditComponent from './EditComponent';

const ListadoComponent = ({ listadoState, setListadoState }) => {
  //const [listadoState, setListadoState] =  useState([]);
  const [editar, setEditar] = useState(0);

  useEffect(() => {
    conseguirpeliculas();
  }, []);


  const conseguirpeliculas = () => {
    let peliculas = JSON.parse(localStorage.getItem('pelis'));

    setListadoState(peliculas);
    return peliculas;
  };

  const borrarPeli = (id) => {
    //conseguir peliculas almacenadas
    let pelis_almacenadas = conseguirpeliculas();

    //filtrar para eliminar
    let nuevo_listado = pelis_almacenadas.filter(peli => peli.id !== parseInt(id));

    //actualizar estado
    setListadoState(nuevo_listado);

    //actualizar datos
    localStorage.setItem('pelis', JSON.stringify(nuevo_listado));
  }


  return (
    <>
      {listadoState != null ?
        listadoState.map(peli => {
          return (
            <article key={peli.id} className="peli-item">
              <h3 className="title">
                {peli.title}
              </h3>
              <p className="description">{peli.description}</p>
              <button className="edit" onClick={() => setEditar(peli.id)}>Editar</button>

              <button
                onClick={() => borrarPeli(peli.id)}
                className="delete">Borrar</button>

              {/*formulario para editar */}
              {editar === peli.id && (
                <EditComponent peli={peli} conseguirpeliculas={conseguirpeliculas}
                  setEditar={setEditar}
                  setListadoState={setListadoState}
                />
              )}
            </article>


          );
        })
        : (<h2>No hay peliculas</h2>)
      }

    </>
  );
}

export default ListadoComponent;
