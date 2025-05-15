import { useState } from 'react'
import './App.css'
import Home from './layouts/Home'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Nav from './Component/Nav';
import ProductosContainer from './Component/ProductosConteiner';
import Carrito from './Component/Carrito';
import AboutUs from './Component/AboutUs';
import Contacto from './Component/Contacto';
import ProductoDetalle from './Component/ProductoDetalle';
import Admin from './Component/Admin';
import Login from './Component/Login';


function App() {
  const [productosCarrito, setProductosCarrito] = useState([])
  const [usuarioLogeado, setUsuarioLogeado] = useState(false)
  const [adminLogeado, setAdminLogeado] = useState(false)
  
  
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

function manejarAdmin() {
    setAdminLogeado(!adminLogeado)
  }

function manejarUser(){
    setUsuarioLogeado(!usuarioLogeado)
  }

  return (
    <Router>
      <div>
        <Nav productosCarrito={productosCarrito}/>
        <Routes>
          <Route path='/aboutUs' element={<AboutUs/>}/>
          <Route path="/" element={<Home />} />
          <Route path='/login' element={<Login user={usuarioLogeado} admin={adminLogeado} setLogeadoAdmin={manejarAdmin} setLogeadoUser={manejarUser}/>}/>
          <Route path='/productos' element={<ProductosContainer funcionCarrito={funcionCarrito} />} />
          <Route path="/carrito" element={<Carrito 
            productos={productosCarrito} 
            eliminarProducto={eliminarProducto} 
            vaciarCarrito={vaciarCarrito}/>} />
          <Route path='/contacto' element={<Contacto/>}/>
          <Route path='/productos/:id' element={<ProductoDetalle funcionCarrito={funcionCarrito}/>}/>
          <Route path='/admin' element={adminLogeado ? <Admin/> : <Navigate to={'/login'} replace/>}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App

