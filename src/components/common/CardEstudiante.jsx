import './CardEstudiante.css'

export default function CardEstudiante({imagen, nombre, apellido, edad}) {
  return (
    <>
        <div className="grupoEstudiantes">
            <div className="listaEstudiantes">
                <img src={imagen} alt="avatar" className="avatar" />
                <p><h3>Nombre: </h3>{nombre}</p>
                <p><h3>Apellido: </h3>{apellido}</p>
                <p><h3>Edad: </h3>{edad}</p>
                <button>Hoja de Vida</button>
                <hr />
            </div>
        </div>
    </>
  )
}
