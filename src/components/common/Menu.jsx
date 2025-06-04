import { NavLink } from "react-router-dom"
import './Menu.css'
import { useState } from "react"
import cuenta from "../../../src/assets/img/cuenta.svg"
// import notificacion from "../../../src/assets/img/notificacion.svg"

export default function Menu() {
    const [menuAbierto, setMenuAbierto] = useState(false);
  return (
    <>
        <section id="menu">
            <p className="logoMenu">Colegio App</p>
            {/* <img src="./img/img-index/logoFundacion-02.svg" alt="logo fundacion" className="logoMenu"/> */}

            <button className="menuHamburguesa"
            onClick={()=>setMenuAbierto(!menuAbierto)}> ☰ </button>

            <ul className={`menuOpciones ${menuAbierto ? "abierto" : ""}`}>
                <NavLink to="/" className={({ isActive }) => isActive ? "linkActivo" : ""}>
                    <li>Inicio</li>
                </NavLink>
                <NavLink to="/registroycontrol" className={({ isActive }) => isActive ? "linkActivo" : ""}>
                    <li>Registro y Control</li>
                </NavLink>
                <NavLink to="/estudiantes" className={({ isActive }) => isActive ? "linkActivo" : ""}>
                    <li>Estudiantes</li>
                </NavLink>
                <NavLink to="/asistencia" className={({ isActive }) => isActive ? "linkActivo" : ""}>
                    <li>Asistencia</li>
                </NavLink>
                <NavLink to="/notas" className={({ isActive }) => isActive ? "linkActivo" : ""}>
                    <li>Notas</li>
                </NavLink>
            </ul>
            <ul className="iconsMenu">
                {/* <NavLink to="/notificaciones">
                    <li><img src={notificacion} alt="icono-notificacion " className="iconoMenu"/></li>
                </NavLink> */}
                <NavLink to="/login">
                    <li><img src={cuenta} alt="icono-usuario" className="iconoMenu"/></li>
                </NavLink>
            </ul>
        </section>
    </>
  )
}
