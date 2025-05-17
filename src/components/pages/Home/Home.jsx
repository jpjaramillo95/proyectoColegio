import { useEffect, useState } from "react"
import banner1 from "../../../../src/assets/img/banner1.jpg"
import banner2 from "../../../../src/assets/img/banner2.jpg"
import btnDerecho from "../../../../src/assets/img/btnDer.svg"
import btnIzquierdo from "../../../../src/assets/img/btnIzq.svg"
import './Home.css'

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
    const interval = setInterval(nextSlide, 5000);
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
    </>
  )
}
