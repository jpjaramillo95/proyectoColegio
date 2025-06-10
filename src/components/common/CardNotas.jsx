import { useState } from "react";

export default function CardNotas({ estudiante }) {
    const [notas, setNotas] = useState([]);
    const [nuevaNota, setNuevaNota] = useState("");

    const agregarNota = async () => {
        if (!nuevaNota.trim()) return;
        
        try {
            await fetch("https://api.example.com/notas", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    idEstudiante: estudiante.id,
                    nota: nuevaNota,
                }),
            });

            setNotas([...notas, nuevaNota]);
            setNuevaNota("");
        } catch (error) {
            console.error("Error al agregar nota:", error);
        }
    };

    return (
        <div className="cardNotas">
            <h2>{estudiante.nombre} {estudiante.apellido}</h2>
            <p>Edad: {estudiante.edad} años</p>

            <input 
                type="text" 
                placeholder="Ejemplo: Examen Final - 85" 
                value={nuevaNota}
                onChange={(e) => setNuevaNota(e.target.value)}
            />
            <button onClick={agregarNota}>Agregar Nota</button>

            <h3>Notas:</h3>
            <ul>
                {notas.map((nota, index) => (
                    <li key={index}>{nota}</li>
                ))}
            </ul>
        </div>
    );
}
