import { useState } from "react";
import "./RegistroYControl.css";

export default function BuscarEstudiante() {
    const [nombre, setNombre] = useState("");
    const [resultado, setResultado] = useState(null);

    function handleSubmit(event) {
        event.preventDefault();
        console.log("Buscando estudiante:", nombre);
        setResultado(`Resultados de búsqueda para: ${nombre}`);
    }

    return (
        <div className="contenedorFormulario">
            <h2>Buscar Estudiante</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="nombre" placeholder="Nombre del estudiante" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
                <button type="submit">Buscar</button>
            </form>
            {resultado && <p>{resultado}</p>}
        </div>
    );
}
