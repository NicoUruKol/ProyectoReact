import "../styles/productos.css"
import { Link } from 'react-router-dom';


export default function Card({producto}){
    
    return(    
    <div className="productos-card">
        <img className="productos-image" src={producto.avatar}/>
        <h1>{producto.name}</h1>
        <h3 className="productos-precio">$ {producto.price}</h3>
        <Link to={"/productos/" + producto.id}> <button className="productos-boton">+ Info</button></Link>
    </div>
    );
}
