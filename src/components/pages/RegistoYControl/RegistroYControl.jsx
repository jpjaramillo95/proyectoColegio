import './RegistroYControl.css'
import CardRegistroYControl from "../../common/CardRegistroYControl";
import registroUsuario from "../../../../src/assets/img/registrarUsuario.svg"
import actualizarUsuario from "../../../../src/assets/img/actualizarUsuario.svg"
import eliminarUsuario from "../../../../src/assets/img/eliminarUsuario.svg"
import buscarUsuario from "../../../../src/assets/img/buscarUsuario.svg"
import RegistroEstudiante from "./RegistroEstudiante";
import ActualizarEstudiante from "./ActualizarEstudiante";
import EliminarEstudiante from "./EliminarEstudiante";
import BuscarEstudiante from "./BuscarEstudiante";
import { useState } from 'react';


export default function RegistroYControl() {
    const [formularioActivo, setFormularioActivo] = useState();

    let registros = [
        { imagen: registroUsuario, tipo: "Registro Estudiante", componente: <RegistroEstudiante /> },
        { imagen: actualizarUsuario, tipo: "Actualizar Estudiante", componente: <ActualizarEstudiante /> },
        { imagen: eliminarUsuario, tipo: "Eliminar Estudiante", componente: <EliminarEstudiante /> },
        { imagen: buscarUsuario, tipo: "Buscar Estudiante", componente: <BuscarEstudiante /> },
    ];

    return (
        <>
            <div className="registroYControl">
                <h1 className='tituloRegistroYControl'>Módulo de registro y control</h1>
                <p>A través de este módulo, los usuarios podrán acceder a perfiles individuales, verificar estados de registro y realizar ajustes según sus necesidades. Además, facilita el seguimiento de procesos administrativos, asegurando un control estructurado y seguro de la información. <br /> <br />

                Este sistema está diseñado para mejorar la experiencia de gestión, optimizando tiempos y asegurando que cada usuario pueda administrar su información de forma clara y rápida.</p>
            </div>

            {formularioActivo ? (
                <div className="contenedorFormularioVolver">
                    <div className="formularioWrapper">
                        {formularioActivo}
                        <button className="botonVolver" onClick={() => setFormularioActivo(null)}>← Volver</button>
                    </div>
                </div>
            ) : (
                <div className="contenedorRegistro">
                    {registros.map((registro, index) => (
                        <CardRegistroYControl
                            key={index}
                            imagen={registro.imagen}
                            tipo={registro.tipo}
                            onClick={() => setFormularioActivo(registro.componente)}
                        />
                    ))}
                </div>
            )}

        </>
    );
}
