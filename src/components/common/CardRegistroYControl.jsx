import './CardRegistroYControl.css'

export default function CardRegistroYControl({imagen, tipo, onClick}) {
  return (
    <>
      <div className="contenedorTarjeta" onClick={onClick}>
            <div className="elementosIzquierda">
                <div className="imagenCard">
                    <img src={imagen} alt="iconoCard" />
                </div>
                <div className="tituloCard">
                    <h2>{tipo}</h2>
                </div>
            </div>
            <div className="imgSombra">
                <img src={imagen} alt="" />
            </div>
      </div>
    </>
  )
}
