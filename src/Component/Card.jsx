import { useState } from "react";
import "../styles/productos.css"


export default function Card({producto, funcionCarrito}){
    const [cantidad, setCantidad] = useState(1);

    function agregarAlCarrito() {
        if (cantidad < 1) return;
        funcionCarrito({...producto, cantidad});
        }

    function sumarContador() {
        setCantidad(cantidad + 1)        
    }

    function restarContador(){
        if (cantidad > 1) {
            setCantidad(cantidad - 1)
        }
    }

    return(    
        <div className="productos-card">
            <img className="productos-image" src={producto.avatar}/>
            <h1>{producto.name}</h1>
            <p>{producto.description}</p>
            <h3 className="productos-precio">$ {producto.price}</h3>
            <div>
                <button onClick={restarContador} className="agregar-boton">-</button>
                <span style={{margin: "0 10px", color: "black"}}>{cantidad}</span>
                <button onClick={sumarContador} className="agregar-boton">+</button>
            </div>
            <button onClick={agregarAlCarrito} className="productos-boton">Agregar al carrito</button>
        </div>
    );
}
