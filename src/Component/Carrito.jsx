import "../styles/carrito.css"

export default function Carrito({ productos, vaciarCarrito, eliminarProducto }) {
    // Calcular total
    const subtotal = productos.reduce((acc, prod) => acc + (prod.price * prod.cantidad), 0);

    return (
        <div className="carrito-wrapper">
            <div className="carrito-container">
                {productos.length > 0 ? productos.map((producto) => (
                    <div key={producto.id} className="carrito-producto">
                        <img className="carrito-imagen" src={producto.avatar} alt={producto.name} />
                        <h2 className="carrito-nombre">{producto.name}</h2>
                        <span style={{ color: "black" }}>x {producto.cantidad}</span>
                        <div>
                            <p style={{ color: "black" }}>$ Unitario</p>
                            <h3 className="carrito-precio">$ {producto.price}</h3>
                        </div>
                        <div>
                            <p style={{ color: "black" }}>Precio total</p>
                            <h3>$ {producto.cantidad * producto.price}</h3>
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
                <p className="subtotal">Subtotal: $ {subtotal}</p>
                <p className="total">Total: $ {subtotal}</p>
                <button className="boton-resumen ir-a-pagar">Ir a pagar</button>
                <button 
                    className="boton-resumen vaciar-carrito"
                    onClick={vaciarCarrito}
                >
                    Vaciar carrito
                </button>
            </div>
        </div>
    );
}