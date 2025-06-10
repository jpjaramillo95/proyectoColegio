import "./Estudiantes.css";
import CardEstudiante from "../../common/cardEstudiante";
import { useEffect, useState } from "react";
import LoadingSpinner from "../../common/loadingSpinner";

export default function Estudiantes() {
  const [grupos, setGrupos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://api.example.com/estudiantes"); // Cambia la URL por la real
        const data = await response.json();
        setGrupos(data.grupos);
      } catch (error) {
        console.error("Error al obtener los estudiantes:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <div className="estudiantes">
        <h1 className="tituloEstudiantes">Módulo para buscar estudiantes</h1>
        <p>
          A través de este módulo, los usuarios podrán acceder a perfiles individuales, verificar estados de registro y realizar ajustes según sus necesidades. Además, facilita el seguimiento de procesos administrativos, asegurando un control estructurado y seguro de la información. <br /> <br />

          Este sistema está diseñado para mejorar la experiencia de gestión, optimizando tiempos y asegurando que cada usuario pueda administrar su información de forma clara y rápida.
        </p>
      </div>
      
      {loading ? <LoadingSpinner /> : grupos.map((grupo, index) => <GrupoEstudiantes key={index} grupo={grupo} />)}
    </>
  );
}

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
            <CardEstudiante key={index} {...estudiante} />
          ))}
        </div>
      )}
    </div>
  );
}
