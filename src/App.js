import ListadoComponent from "./componentes/ListadoComponent";
import SearchComponent  from "./componentes/SearchComponent";
import AddComponent  from "./componentes/AddComponent";
import {useState} from 'react';

function App() {
  const [listadoState, setListadoState] =  useState([]);

  return (
    <div className="layout" >
      <header className="header">
        <div className="logo">
          <div className="play"></div>
        </div>
        <h1>MisPelis</h1>
      </header>

      <nav className="nav">
        <ul>
          <li><a href="/#">Inicio</a></li>
          <li><a href="/#">Peliculas</a></li>
          <li><a href="/#">Blog</a></li>
          <li><a href="/#">Contacto</a></li>
        </ul>
      </nav>

      {/*CONTENIDO PRINCIPAL*/}
      <section className="content">
        <ListadoComponent listadoState={listadoState} setListadoState={setListadoState}/>

      </section>

      {/*BARRA LATERAL*/}
      <aside className="lateral">
         <SearchComponent listadoState={listadoState}  setListadoState={setListadoState}/>
         
         <AddComponent setListadoState={setListadoState}/>
        
      </aside>

      <footer className="footer">
        &copy; Master en javascript ES12 y Typescript - <a href="https://myedesarrolloweb.com">Micaela Eichhorn</a>
      </footer>
    </div>
  );
}

export default App;
