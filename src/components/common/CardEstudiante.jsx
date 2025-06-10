import "./CardEstudiante.css";

export default function CardEstudiante({ imagen, nombre, apellido, edad }) {
  return (
    <div className="listaEstudiantes">
      <img src={imagen} alt="avatar" className="avatar" />
      <div className="infoEstudiante">
        <h3>{nombre} {apellido}</h3>
        <p>Edad: {edad} años</p>
        <button className="btnEstudiante">Ver Hoja de Vida</button>
      </div>
    </div>
  );
}
