import CardNotas from "../../common/CardNotas";
import "./Notas.css";
import { useEffect, useState } from "react";

export default function Notas() {
    const [estudiantes, setEstudiantes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch("https://api.example.com/estudiantes"); // Cambia la URL por la real
                const data = await response.json();
                setEstudiantes(data);
            } catch (error) {
                console.error("Error al obtener los estudiantes:", error);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    return (
        <div className="notas">
            <h1 className="tituloNotas">Gestión de Notas</h1>
            <p>A través de este módulo, los usuarios podrán registrar, actualizar y revisar las calificaciones de los estudiantes de manera eficiente. Además, permite un seguimiento detallado del rendimiento académico, ofreciendo herramientas para la gestión de evaluaciones y ajustes según las necesidades educativas. <br /> <br />

            Este sistema está diseñado para optimizar la administración de notas, asegurando que cada usuario pueda acceder y modificar la información de forma estructurada, ágil y segura.</p>

            {loading ? <p>Cargando...</p> : estudiantes.map((estudiante) => (
                <CardNotas key={estudiante.id} estudiante={estudiante} />
            ))}
        </div>
    );
}
