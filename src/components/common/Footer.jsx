import './Footer.css'
import { Link } from "react-router-dom"
import iconoFacebook from "../../../src/assets/img/facebook.svg"
import iconoInstagram from "../../../src/assets/img/instagram.svg"
import iconoTwitter from "../../../src/assets/img/twitter.svg"
import iconoGitHub from "../../../src/assets/img/github.svg"
import iconoYouTube from "../../../src/assets/img/youtube.svg"

export default function Footer() {
  return (
    <>
    <div className="contenedorFooter">
        <div className="contenedorSuperior">
            <div className="logoFooter">
                <p>Colegio App</p>
            </div>
            <div className='contenidoDerecha'>
                <div className="enlacesInteres">
                    <ul>
                        <Link to="/" className="linkEnlaces"><li>Sobre nosotros</li></Link>
                        <Link to="/" className="linkEnlaces"><li>Blog</li></Link>
                        <Link to="/" className="linkEnlaces"><li>Trabaja con nosotros</li></Link>
                        <Link to="/" className="linkEnlaces"><li>PQR</li></Link>
                    </ul>
                </div>
                <div className="redesSociales">
                    <Link to="/" className="iconoRedes"><img src={iconoFacebook} alt="facebook" /></Link>
                    <Link to="/" className="iconoRedes"><img src={iconoInstagram} alt="instagram" /></Link>
                    <Link to="/" className="iconoRedes"><img src={iconoTwitter} alt="twitter" /></Link>
                    <Link to="/" className="iconoRedes"><img src={iconoGitHub} alt="github" /></Link>
                    <Link to="/" className="iconoRedes"><img src={iconoYouTube} alt="youtube" /></Link>
                </div>
            </div>
        </div>
        <div className='textoCreditos'>
            <p>© 2025 Desarrollado por Laura Medina | Maria Paula Maingues | Juan Pablo Jaramillo</p>
        </div>
        
    </div>
    </>
  )
}
