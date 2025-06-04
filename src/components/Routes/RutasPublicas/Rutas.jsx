import { Navigate, Route, Routes } from "react-router-dom"
import Menu from "../../common/Menu"
import Home from "../../pages/Home/Home"
import Footer from "../../common/Footer"
// import RegistroYControl from "../../pages/RegistoYControl/RegistroYControl"
// import Estudiantes from "../../pages/Estudiantes/Estudiantes"
import Login from "../../pages/Login/Login"
import Notas from "../../pages/Notas/Notas"


export default function Rutas() {
  let user;
  if(user){
    let redirectPath = user.rol == "admin" ? "/registroycontrol" : "/notas"
    user.rol == "secretaria" ? "/" : redirectPath 
    return <Navigate to="" replace />
  }

  return (
    <>
    <Menu></Menu>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/home" element={<Home/>}></Route>
      </Routes>
      <Footer></Footer>
    </>
  )
}
