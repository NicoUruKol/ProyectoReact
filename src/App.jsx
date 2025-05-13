import { useState } from 'react'
import './App.css'
import Home from './layouts/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './Component/Nav';
import ProductosContainer from './Component/ProductosConteiner';
import Carrito from './Component/Carrito';

function App() {
  const [productosCarrito, setProductosCarrito] = useState([])
    function funcionCarrito(producto){
      const existe = productosCarrito.find(p => p.id === producto.id);
      if (existe){
          const carritoActualizado = productosCarrito.map((p) =>{
              if (p.id === producto.id){
                  const productoActualizado = {...p, cantidad: p.cantidad + producto.cantidad}
                  return productoActualizado
              }else{
                  return p
              }
          })

          setProductosCarrito(carritoActualizado)
      }else{

      const nuevoCarrito = [...productosCarrito, producto]
      setProductosCarrito(nuevoCarrito)
  }}

  function eliminarProducto(id) {
    const nuevoCarrito = productosCarrito.filter((p) => p.id !== id);
    setProductosCarrito(nuevoCarrito);
}

function vaciarCarrito() {
    setProductosCarrito([]);
}



  return (
    <Router>
      <div>
        <Nav/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<ProductosContainer productosCarrito={productosCarrito}
                                                                setProductosCarrito={setProductosCarrito}
                                                                funcionCarrito={funcionCarrito}/>} />
          <Route path="/carrito" element={<Carrito productos={productosCarrito} eliminarProducto={eliminarProducto} vaciarCarrito={vaciarCarrito}/>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App

