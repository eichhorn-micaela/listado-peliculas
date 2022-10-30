import React, { useState } from 'react';

const SearchComponent = ({listadoState, setListadoState}) => {
  const [search, setSearch] = useState('');
  const [noEncontrado, setNoEncontrado] = useState(false);

  const buscarPeli = e => {
    e.preventDefault()
    //crear estado y actualizarlo
    setSearch(e.target.value);

    //filtrar coincidencias
     let pelis_encontradas = listadoState.filter(peli => { 
         return peli.title.toLowerCase().includes(search.toLowerCase());
     })
    if (search.length <= 1 || pelis_encontradas <= 0) {
       pelis_encontradas = JSON.parse(localStorage.getItem('pelis'));
       setNoEncontrado(true)
    }else{
      setNoEncontrado(false)
    }

    

    //actualizar estado del listado principal con lo que he logrado filtrar
    setListadoState(pelis_encontradas)
  }
    return (
        <div className="search">
          <h3 className="title">Buscador:  {search}</h3>
          {(noEncontrado && search.length > 1) && 
          <span className='no-encontrado'> No se ha encontrado ninguna coincidencia </span>
          }
          <form >
            <input 
            type="text" 
            name="search" 
            id="search_field" 
            autoComplete='off'
            onChange={buscarPeli}
            />
            <button>Buscar</button>
          </form>
        </div>
    );
}

export default SearchComponent;
