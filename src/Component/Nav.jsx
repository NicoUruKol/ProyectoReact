import { Link } from "react-router-dom";


function Nav(){
    return (  
        <nav style={{ backgroundColor: "bisque", color: "black", padding: "10px", width: "818px", justifySelf: "center",
            border: "solid 2px rgb(236, 192, 14)", borderRadius:"8px", marginBottom: "2px"
        }}>  
            <ul style={{ listStyle: "none", display: "flex", justifyContent: "space-around", margin: 0 }}>  
                <li><Link to="/" style={{ color: "black", textDecoration: "none" }}>Inicio</Link></li>  
                <li><Link to="/productos" style={{ color: "black", textDecoration: "none" }}>Productos</Link></li>  
                <li><Link to="/carrito" style={{ color: "black", textDecoration: "none" }}>Carrito</Link></li>  
            </ul>  
        </nav>  
    );  
}  

export default Nav