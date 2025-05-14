import { Link } from "react-router-dom";
import "../styles/nav.css";



function Nav() {
    return (  
        <nav className="nav-container">  
            <div className="nav-logo">
                <Link to="/">
                    <img src="logo_photoshop_LARGO.png" alt="TANNAT&CO" className="logo-img" />
                </Link>
            </div>
            <ul className="nav-links">
                <li><Link className="nav-link" to="AboutUs">Nosotros</Link></li> 
                <li><Link className="nav-link" to="/">Inicio</Link></li>
                <li><Link className="nav-link" to="/Contacto">Contacto</Link></li>
                <li><Link className="nav-link" to="/productos">Productos</Link></li>  
                <li><Link className="nav-link" to="/carrito">Carrito</Link></li>  
            </ul>
        </nav>  
    );  
}

export default Nav