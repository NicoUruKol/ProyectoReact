import { useState } from "react";
import { Link } from 'react-router-dom';



export default function BodegaMes(){
    const [modalAbierto, setModalAbierto] = useState(false);
    const [imagenModal, setImagenModal] = useState("");

    const abrirModal = (src) => {
        setImagenModal(src);
        setModalAbierto(true);
    };

    const cerrarModal = () => {
        setModalAbierto(false);
        setImagenModal("");
    };

    return(
        <div>
            <section className="destacados" id="bodega-mes">
                <h2>BODEGA DEL MES</h2>
                <div className="destacados-lista-container">
                    <div className="destacados-lista">
                        <button onClick={() => abrirModal("/Zorzal-brochoure.png")} className="boton-sin-estilo">
                            <img src="/Presentacion_Zorzal _Distribuidor.png" 
                                className="imagen-hover" 
                                alt="Bodega Zorzal" />
                        </button>
                    </div>
                    <div className="destacados-lista">
                        <Link to="/productos">
                            <img src="/FlyerTiza.PNG" alt=""/>
                        </Link>
                        </div>
                        <div className="destacados-lista">
                        <Link to="/productos">
                            <img src="/FlyarGualta.jpeg" alt=""/>
                        </Link>
                        </div>
                        <div className="destacados-lista">
                        <Link to="/productos">
                            <img src="/Flyerporfiado.jpg" alt=""/>
                        </Link>
                    </div>
                </div>
            </section>
            
            {modalAbierto && (
                <div className="modal" onClick={cerrarModal}>
                <span className="cerrar" onClick={cerrarModal}>&times;</span>
                <img className="modal-contenido" src={imagenModal} alt="Ampliada"
                onClick={(e) => e.stopPropagation()}
                />
        </div>
    )}
        </div>
    )
}