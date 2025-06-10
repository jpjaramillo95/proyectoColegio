import "./CardAnalisis.css";

export default function CardAnalisis({ imagen, titulo, tipo, descripcion, analisis, aplicacion }) {
    return (
        <div className="cardAnalisis">
            <img src={imagen} alt="Gráfico" className="imagenAnalisis" />
            <div className="contenidoAnalisis">
                <h2>{titulo}</h2>
                <p className="tipoAnalisis"><strong>Tipo de gráfico:</strong> {tipo}</p>
                <p>{descripcion}</p>
                <ul>
                    {analisis.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
                <p className="aplicacionAnalisis"><strong>Aplicación práctica:</strong> {aplicacion}</p>
            </div>
        </div>
    );
}
