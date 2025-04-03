import "./style.css"
import { Link } from 'react-router-dom';

function Menu() {
    return (
        <nav className="c-menu">
          <Link to="/">Lista</Link>
          <Link to="/Detalle">Detalle</Link>
          <Link to="/Favoritos">Favoritos</Link>
          <Link to="/Listar">Listar</Link>
          <Link to="/Original">Original</Link>
          <Link to="/Usuarios">Usuarios</Link>
        </nav>
    )
  }
 
  export default Menu
