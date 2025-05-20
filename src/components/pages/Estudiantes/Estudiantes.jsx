import './Estudiantes.css'
import avatar1 from "../../../../src/assets/img/estudianteAvatar1.jpg"
import avatar2 from "../../../../src/assets/img/estudianteAvatar2.jpg"
import CardEstudiante from '../../common/cardEstudiante';
import { useState } from 'react';

export default function Estudiantes() {
let grupos= [
    {
        grupo: 1,
        estudiantes: [
            {
                imagen: avatar1,
                nombre: "Andres Mauricio",
                apellido: "Lopez Farias",
                edad: 15,
            },
            {
                imagen: avatar2,
                nombre: "Andrea",
                apellido: "Murcia Conejo",
                edad: 14,
            },
            {
                imagen: avatar2,
                nombre: "Piroberta",
                apellido: "Jajaj Jujuju",
                edad: 15,
            },
        ]
    },
    {
        grupo: 2,
        estudiantes: [
            {
                imagen: avatar1,
                nombre: "Andres Mauricio",
                apellido: "Lopez Farias",
                edad: 15,
            },
            {
                imagen: avatar2,
                nombre: "Andrea",
                apellido: "Murcia Conejo",
                edad: 14,
            },
            {
                imagen: avatar2,
                nombre: "Piroberta",
                apellido: "Jajaj Jujuju",
                edad: 15,
            },
        ]
    }
];

function GrupoEstudiantes({ grupo }) {
  const [abierto, setAbierto] = useState(false);
  return (
    <div className="contenedorEstudiantes">
      <h2 onClick={() => setAbierto(!abierto)} className="tituloGrupo">
        Grupo #{grupo.grupo} {abierto ? "▲" : "▼"} 
      </h2>
      {abierto && (
        <div className="grupoEstudiantes">
          {grupo.estudiantes.map((estudiante, index) => (
            <CardEstudiante 
              key={index}
              imagen={estudiante.imagen}
              nombre={estudiante.nombre}
              apellido={estudiante.apellido}
              edad={estudiante.edad}
            />
          ))}
        </div>
      )}
    </div>
  );
}

  return (
    <>
    <div className="estudiantes">
        <h1 className='tituloEstudiantes'>Módulo para buscar estudiantes</h1>
        <p>A través de este módulo, los usuarios podrán acceder a perfiles individuales, verificar estados de registro y realizar ajustes según sus necesidades. Además, facilita el seguimiento de procesos administrativos, asegurando un control estructurado y seguro de la información. <br /> <br />

        Este sistema está diseñado para mejorar la experiencia de gestión, optimizando tiempos y asegurando que cada usuario pueda administrar su información de forma clara y rápida.</p>
    </div>
    {grupos.map((grupo, index)=>(
        <GrupoEstudiantes 
            key={index}
            grupo={grupo}
        />
    ))}
    </>
  )
}
