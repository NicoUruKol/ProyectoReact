import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/ProductoDetalle.css";
import { dispararSweetConfirmar } from "../assets/sweetAlert";

export default function ProductoDetalle({funcionCarrito}){
    const { id } = useParams();
    const [producto, setProducto] = useState(null);
    const [cantidad, setCantidad] = useState(1);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        fetch('https://68100d9127f2fdac24101f8a.mockapi.io/productos')
            .then((respuesta) => respuesta.json())
            .then((datos) => {
                const productoEncontrado = datos.find((item) => item.id === id);
                if (productoEncontrado) {
                setProducto(productoEncontrado);
                } else {
                setError("Producto no encontrado.");
                }
                setCargando(false);
            })
            .catch((err) => {
                console.log("Error:", err);
                setError("Hubo un error al obtener el producto.");
                setCargando(false);
            });
    }, [id]);

    function agregarAlCarrito() {
        if (cantidad < 1) return;
        dispararSweetConfirmar("Agregado!!!", "El producto ha sido agregado con exito!!!","success")
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

    if (cargando) return <p>Cargando producto...</p>;
    if (error) return <p>{error}</p>;
    if (!producto) return null;

    return (
        <div className="detalle-container">
        <img className="detalle-imagen" src={producto.avatar} alt={producto.name} />
        <div className="detalle-info">
            <h2>{producto.name}</h2>
            <p>{producto.description}</p>
            <p>{producto.price} $</p>
            <div>
                <button onClick={restarContador} className="agregar-boton">-</button>
                <span style={{margin: "0 10px", color: "black"}}>{cantidad}</span>
                <button onClick={sumarContador} className="agregar-boton">+</button>
            </div>
            <button onClick={agregarAlCarrito}>Agregar al carrito</button>
        </div>
        </div>
    );
    }
