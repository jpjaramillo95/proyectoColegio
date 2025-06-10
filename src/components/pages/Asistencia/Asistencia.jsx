import "./Asistencia.css";
import { useEffect, useState } from "react";

export default function Asistencia() {
    const [grupos, setGrupos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch("https://api.example.com/grupos"); // URL de la API en Java
                const data = await response.json();
                setGrupos(data.grupos);
            } catch (error) {
                console.error("Error al obtener los grupos:", error);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    return (
        <div className="asistencia">
            <h1 className="tituloAsistencia">Registro de Asistencia</h1>
            <p>A través de este módulo, los usuarios podrán registrar la asistencia de los estudiantes, gestionar justificativos y eliminar registros cuando sea necesario. Además, ofrece herramientas para el seguimiento de ausencias, permitiendo un control preciso y eficiente de la información académica. <br /> <br />

            Este sistema está diseñado para agilizar el proceso de gestión, reduciendo tiempos administrativos y garantizando que cada usuario pueda acceder y administrar los datos de asistencia de manera clara y segura.</p>

            {loading ? <p>Cargando...</p> : grupos.map((grupo, index) => (
                <GrupoAsistencia key={index} grupo={grupo} />
            ))}
        </div>
    );
}

function GrupoAsistencia({ grupo }) {
    const [abierto, setAbierto] = useState(false);
    return (
        <div className="contenedorGrupo">
            <h2 onClick={() => setAbierto(!abierto)} className="tituloGrupo">
                Grupo #{grupo.grupo} {abierto ? "▲" : "▼"}
            </h2>
            {abierto && (
                <div className="listaEstudiantes">
                    {grupo.estudiantes.map((estudiante) => (
                        <CardAsistencia key={estudiante.id} estudiante={estudiante} grupo={grupo.grupo} />
                    ))}
                </div>
            )}
        </div>
    );
}
