import { useState } from "react";
import "./RegistroYControl.css";

export default function ActualizarEstudiante() {
    const [formData, setFormData] = useState({ nombre: "", nuevoCorreo: "", nuevaEdad: "", nuevoCurso: "" });
        const [mensaje, setMensaje] = useState("");

    function handleChange(event) {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log("Datos actualizados:", formData);
        setMensaje("✅ Estudiante actualizado con éxito.");
        setTimeout(() => setMensaje(""), 3000);
        setFormData({ nombre: "", nuevoCorreo: "", nuevaEdad: "", nuevoCurso: "" });
    }

    return (
        <div className="contenedorFormulario">
            <h2>Actualizar Estudiante</h2>
            {mensaje && <p className="mensaje">{mensaje}</p>}
            <form onSubmit={handleSubmit}>
                <input type="text" name="nombre" placeholder="Nombre a actualizar" value={formData.nombre} onChange={handleChange} required />
                <input type="email" name="nuevoCorreo" placeholder="Nuevo correo" value={formData.nuevoCorreo} onChange={handleChange} />
                <input type="number" name="nuevaEdad" placeholder="Nueva edad" value={formData.nuevaEdad} onChange={handleChange} />
                <input type="text" name="nuevoCurso" placeholder="Nuevo curso" value={formData.nuevoCurso} onChange={handleChange} />
                <button type="submit">Actualizar</button>
            </form>
        </div>
    );
}
