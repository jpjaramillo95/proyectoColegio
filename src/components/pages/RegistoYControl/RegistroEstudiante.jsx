import { useState } from "react";
import "./RegistroYControl.css";

export default function RegistroEstudiante() {
    const [formData, setFormData] = useState({ nombre: "", correo: "", edad: "", curso: "" });
    const [mensaje, setMensaje] = useState("");

    function handleChange(event) {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    }

    function handleSubmit(event) {
        event.preventDefault();
        setMensaje("✅ Estudiante registrado con éxito.");
        setTimeout(() => setMensaje(""), 3000);
        setFormData({ nombre: "", correo: "", edad: "", curso: "" });
    }

    return (
        <div className="contenedorFormulario">
            <h2>Registrar Estudiante</h2>
            {mensaje && <p className="mensaje">{mensaje}</p>}
            <form onSubmit={handleSubmit}>
                <input type="text" name="nombre" placeholder="Nombre" value={formData.nombre} onChange={handleChange} required />
                <input type="email" name="correo" placeholder="Correo" value={formData.correo} onChange={handleChange} required />
                <input type="number" name="edad" placeholder="Edad" value={formData.edad} onChange={handleChange} required />
                <input type="text" name="curso" placeholder="Curso" value={formData.curso} onChange={handleChange} required />
                <button type="submit">Registrar</button>
            </form>
        </div>
    );
}
