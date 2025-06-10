import { useState } from "react";
import "./RegistroYControl.css";

export default function EliminarEstudiante() {
    const [nombre, setNombre] = useState("");
    const [mensaje, setMensaje] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        console.log("Estudiante eliminado:", nombre);
        setNombre("");
        setMensaje("✅ Estudiante eliminado con éxito.");
        setTimeout(() => setMensaje(""), 3000);
    }

    return (
        <div className="contenedorFormulario">
            <h2>Eliminar Estudiante</h2>
            {mensaje && <p className="mensaje">{mensaje}</p>}            
            <form onSubmit={handleSubmit}>
                <input type="text" name="nombre" placeholder="Nombre del estudiante" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
                <button type="submit">Eliminar</button>
            </form>
        </div>
    );
}
