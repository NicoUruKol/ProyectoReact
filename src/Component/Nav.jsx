import { Link } from "react-router-dom";
import "../styles/nav.css";
import { FaUser } from "react-icons/fa";
import { ShoppingCart } from "lucide-react";




function Nav({ productosCarrito }) {
    return (
        <>
            <div className="nav-barra-superior">
                <ul>
                    <li><Link className="nav-superior-link" to="/admin">Admin</Link></li>
                    <li><Link className="nav-superior-link" to="/login"><FaUser /> Login</Link></li>
                </ul>
            </div>

            <nav className="nav-container">
                <div className="nav-logo">
                    <Link to="/">
                        <img src="logo_photoshop_LARGO.png" alt="TANNAT&CO" className="logo-img" />
                    </Link>
                </div>
                <ul className="nav-links">
                    <li><Link className="nav-link" to="/AboutUs">Nosotros</Link></li>
                    <li><Link className="nav-link" to="/">Inicio</Link></li>
                    <li><Link className="nav-link" to="/Contacto">Contacto</Link></li>
                    <li><Link className="nav-link" to="/productos">Productos</Link></li>
                    <li>
                    <Link className="nav-link carrito-link" to="/carrito">
                        <ShoppingCart size={32} />
                        {productosCarrito.length > 0 && (
                        <span className="carrito-contador">{productosCarrito.length}</span>
                        )}
                    </Link>
                    </li>


                </ul>
            </nav>
        </>
    );
}

export default Nav;
