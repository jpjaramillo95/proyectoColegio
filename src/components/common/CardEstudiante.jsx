import "./CardEstudiante.css";

export default function CardEstudiante({ imagen, nombre, apellido, edad }) {
  return (
    <>
      <div className="listaEstudiantes">
        <img src={imagen} alt="avatar" className="avatar" />
        <div className="infoEstudiante">
          <p><h3>Nombre: </h3>{nombre}</p>
          <p><h3>Apellido: </h3>{apellido}</p>
          <p><h3>Edad: </h3>{edad} años</p>
          <button className="btnEstudiante">Hoja de Vida</button>
        </div>
      </div>
    </>
  );
}
