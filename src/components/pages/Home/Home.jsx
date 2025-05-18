import './Home.css'
import { useEffect, useState } from "react"
import banner1 from "../../../../src/assets/img/banner1.jpg"
import banner2 from "../../../../src/assets/img/banner2.jpg"
import btnDerecho from "../../../../src/assets/img/btnDer.svg"
import btnIzquierdo from "../../../../src/assets/img/btnIzq.svg"
import iconoGraduado from "../../../../src/assets/img/graduadosIconoai.svg"
import iconoEstudiante from "../../../../src/assets/img/estudianteIcono-01.svg"
import iconoProfesor from "../../../../src/assets/img/profesorIcono-01.svg"
import iconoExperiencia from "../../../../src/assets/img/experienciaIcono-01.svg"
import CardNoticias from "../../common/CardNoticias"

export default function Home() {

  const [index, setIndex] = useState(0);
  const slides = [banner1, banner2];
  
  const nextSlide = ()=>{
    setIndex((prevIndex)=>(prevIndex + 1) % slides.length);
  };

  const prevSlide = ()=>{
    setIndex((prevIndex)=>(prevIndex - 1 + slides.length) % slides.length)
  }

  useEffect(()=>{
    const interval = setInterval(nextSlide, 10000);
    return ()=> clearInterval(interval);
  }, []);

  return (
    

    <>
      <div className="banner">
            <div className="slideBanner">
              <img src={slides[index]} alt="banner" className="slide"/>
            </div>
            <button className="btnIzq" onClick={prevSlide}>
                <img src={btnIzquierdo} alt="bton izquierdo"/>
            </button>
            <button className="btnDer" onClick={nextSlide}>
                <img src={btnDerecho} alt="bton derecho"/>
            </button>
        </div>
        <div className="noticias">
            <h1 className='tituloNoticias'>Noticias Recientes</h1>
        </div>
        <div className='contenedorNoticias'>
          <CardNoticias></CardNoticias>
          <CardNoticias></CardNoticias>
          <CardNoticias></CardNoticias>
        </div>
        <div className='contenedorCifras'>
          <div className='tituloCifras'>
            <h1>Nuestro Colegio En Cifras</h1>
          </div>
          <h2>Nuestras estadisticas</h2>
          <div className='contenedorEstadisticas'>
            <div className='cifras'>
              <img src={iconoEstudiante} alt="" className='imgEstadisticas' />
              <p className="cifra">204</p>
              <p className="dato">ESTUDIANTES</p>
            </div>
            <div className='cifras'>
              <img src={iconoGraduado} alt="" className='imgEstadisticas' />
              <p className="cifra">996</p>
              <p className="dato">EGRESADOS</p>
            </div>
            <div className='cifras'>
              <img src={iconoProfesor} alt="" className='imgEstadisticas' />
              <p className="cifra">16</p>
              <p className="dato">DIRECTIVOS Y DOCENTES</p>
            </div>
            <div className='cifras'>
              <img src={iconoExperiencia} alt="" className='imgEstadisticas' />
              <p className="cifra">20</p>
              <p className="dato">AÑOS DE EXPERIENCIA</p>
            </div>
          </div>
        </div>
    </>
  )
}
