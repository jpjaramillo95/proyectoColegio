import "./CardAsistencia.css";

export default function CardAsistencia({ estudiante, grupo }) {
    const registrarAsistencia = async (estado) => {
        try {
            await fetch("https://api.example.com/asistencia", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    idEstudiante: estudiante.id, grupo, estado,
                }),
            });
            alert(`✅ ${estado} registrado para ${estudiante.nombre}`);
        } catch (error) {
            console.error("Error al registrar asistencia:", error);
        }
    };

    return (
        <div className="cardAsistencia">
            <img src={estudiante.imagen} alt="avatar" className="avatarAsistencia" />
            <div className="infoEstudiante">
                <h3>{estudiante.nombre} {estudiante.apellido}</h3>
                <p>Edad: {estudiante.edad} años</p>
                <div className="botonesAsistencia">
                    <button onClick={() => registrarAsistencia("Presente")} className="btnPresente">Presente</button>
                    <button onClick={() => registrarAsistencia("Ausente")} className="btnAusente">Ausente</button>
                    <button onClick={() => registrarAsistencia("Justificado")} className="btnJustificado">Excusa</button>
                </div>
            </div>
        </div>
    );
}
