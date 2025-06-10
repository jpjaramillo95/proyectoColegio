import { NavLink } from "react-router-dom"
import './Menu.css'
import { useEffect, useState } from "react"
import cuenta from "../../../src/assets/img/cuenta.svg"
import { useAuth } from "../../context/AuthContext";
// import notificacion from "../../../src/assets/img/notificacion.svg"

export default function Menu() {
    const [menuAbierto, setMenuAbierto] = useState(false);
    const [menuPerfilAbierto, setMenuPerfilAbierto] = useState(false);

    let{user, logout} = useAuth();

    console.log("info user: ", user)

    useEffect(()=>{
        console.log("user: ", user)
    })

  return (
    <>
        <section id="menu">
            <p className="logoMenu">Colegio App</p>
            {/* <img src="./img/img-index/logoFundacion-02.svg" alt="logo fundacion" className="logoMenu"/> */}

            <button className="menuHamburguesa"
            onClick={()=>setMenuAbierto(!menuAbierto)}> ☰ </button>

            <ul className={`menuOpciones ${menuAbierto ? "abierto" : ""}`}>
                <NavLink to="/home" className={({ isActive }) => isActive ? "linkActivo" : ""}>
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
                <NavLink to="/analisisdatos" className={({ isActive }) => isActive ? "linkActivo" : ""}>
                    <li>Analisis de Datos</li>
                </NavLink>
            </ul>
            {/* <ul className="iconsMenu">
                <NavLink to="/login">
                    <li className="usuarioContainer">
                        <p className="nombreUser">{user ? user.username: "Hola "}</p>
                        <img src={cuenta} alt="icono-usuario" className="iconoMenu"/>
                    </li>
                </NavLink>
            </ul> */}
            <ul className="iconsMenu">
                <div className="usuarioContainer" onClick={() => setMenuPerfilAbierto(!menuPerfilAbierto)}>
                    <p className="nombreUser">{user ? user.username : "Hola"}</p>
                    <img src={cuenta} alt="icono-usuario" className="iconoMenu"/>
                </div>

                {menuPerfilAbierto && (
                    <div className="menuPerfil">
                        <button className="logoutButton" onClick={()=>logout()} >Cerrar sesión</button>
                    </div>
                )}
            </ul>
        </section>
    </>
  )
}
