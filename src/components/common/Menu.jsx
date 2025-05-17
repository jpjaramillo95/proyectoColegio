import { NavLink } from "react-router-dom"
import './Menu.css'
import { useState } from "react"

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
                    <li>Matricula</li>
                </NavLink>
                <NavLink to="/aa" className={({ isActive }) => isActive ? "linkActivo" : ""}>
                    <li>Notas</li>
                </NavLink>
                <NavLink to="/a" className={({ isActive }) => isActive ? "linkActivo" : ""}>
                    <li>Asistencias</li>
                </NavLink>
                <NavLink to="87" className={({ isActive }) => isActive ? "linkActivo" : ""}>
                    <li>Modulos</li>
                </NavLink>
                <NavLink to="87" className={({ isActive }) => isActive ? "linkActivo" : ""}>
                    <li>Éxamenes</li>
                </NavLink>
            </ul>
            {/* <ul className="iconsMenu">
                <NavLink to="#">
                    <li><img src="./img/img-index/log-menu.svg" alt="log menu" className="iconoMenu"/></li>
                </NavLink>
                <NavLink to="#">
                    <li><img src="./img/img-index/cart-menu.svg" alt="cart menu" className="iconoMenu"/></li>
                </NavLink>
            </ul> */}
        </section>
    </>
  )
}
