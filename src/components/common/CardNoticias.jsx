import './CardNoticias.css'
import noticia1 from "../../../src/assets/img/noticia1.jpg"


export default function CardNoticias() {
  return (
    <>
      <div className="contenedorNoticia">
        <img src={noticia1} alt="img noticia" className="imgNoticia" />
        <h2 className='tituloNoticia'>Comienzan los parciales</h2>
        <div className="fechaNoticia">17 May 2025</div>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias rem corporis a enim sapiente temporibus quae illo quis molestias dolores, totam, maiores quibusdam numquam quod esse quasi ipsa provident recusandae!</p>
        <button className='btnNoticia'>Leer más</button>
      </div>
    </>
  )
}
