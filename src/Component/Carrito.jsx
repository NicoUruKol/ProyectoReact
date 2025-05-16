import "../styles/carrito.css"
import { formatearPrecio } from '../Component/FomatoPrecio';
import Footer from "./Footer";

export default function Carrito({ productos, vaciarCarrito, eliminarProducto }) {
    const subtotal = productos.reduce((acc, prod) => acc + (prod.price * prod.cantidad), 0);

    return (
        <div>
            <div className="carrito-wrapper">
                <div className="carrito-container">
                    {productos.length > 0 ? productos.map((producto) => (
                        <div key={producto.id} className="carrito-producto">
                            <img className="carrito-imagen" src={producto.avatar} alt={producto.name} />
                            <h2 className="carrito-nombre">{producto.name}</h2>
                            <span style={{ color: "black" }}>x {producto.cantidad}</span>
                            <div>
                                <p style={{ color: "black" }}>$ Unitario</p>
                                <h3 className="carrito-precio">$ {formatearPrecio(producto.price)}</h3>
                            </div>
                            <div>
                                <p style={{ color: "black" }}>Precio total</p>
                                <h3>$ {formatearPrecio(producto.cantidad * producto.price)}</h3>
                            </div>
                            <button 
                                onClick={() => eliminarProducto(producto.id)} 
                                style={{ color: "black", backgroundColor: "red", border: "solid 1px Black" }}
                            >x</button>
                        </div>
                    )) : <p>Tu carrito esta vacío</p>}
                </div>

                <div className="carrito-resumen">
                    <h3>Resumen</h3>
                    <p className="subtotal">Subtotal: $ {formatearPrecio(subtotal)}</p>
                    <p className="total">Total: $ {formatearPrecio(subtotal)}</p>
                    <button className="boton-resumen ir-a-pagar">Ir a pagar</button>
                    <button 
                        className="boton-resumen vaciar-carrito"
                        onClick={vaciarCarrito}>
                        Vaciar carrito
                    </button>
                </div>
            </div>
            <Footer/>
        </div>
    );
}