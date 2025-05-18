import './RegistroYControl.css'
import CardRegistroYControl from "../../common/CardRegistroYControl";
import registroUsuario from "../../../../src/assets/img/registrarUsuario.svg"
import actualizarUsuario from "../../../../src/assets/img/actualizarUsuario.svg"
import eliminarUsuario from "../../../../src/assets/img/eliminarUsuario.svg"
import buscarUsuario from "../../../../src/assets/img/buscarUsuario.svg"


export default function RegistroYControl() {
    let registros= [
        {
            imagen:registroUsuario,
            tipo:"Registro Estudiante",
        },
        {
            imagen:actualizarUsuario,
            tipo:"Actualizar Estudiante",
        },
        {
            imagen:eliminarUsuario,
            tipo:"Eliminar Estudiante",
        },
        {
            imagen:buscarUsuario,
            tipo:"Buscar Estudiante",
        }
    ]

  return (
    <>
    <div className="registroYControl">
        <h1 className='tituloRegistroYControl'>Módulo de registro y control</h1>
        <p>A través de este módulo, los usuarios podrán acceder a perfiles individuales, verificar estados de registro y realizar ajustes según sus necesidades. Además, facilita el seguimiento de procesos administrativos, asegurando un control estructurado y seguro de la información. <br /> <br />

        Este sistema está diseñado para mejorar la experiencia de gestión, optimizando tiempos y asegurando que cada usuario pueda administrar su información de forma clara y rápida.</p>
    </div>
    <div className="contenedorRegistro">
        {registros.map((registro, index)=>(
            <CardRegistroYControl
                key={index}
                imagen={registro.imagen}
                tipo={registro.tipo}
            />
        ))}
    </div> 
    </>
  )
}
