import { Route, Routes } from "react-router-dom"
import Menu from "../../common/menu"
import Home from "../../pages/Home/Home"
import Footer from "../../common/Footer"
import RegistroYControl from "../../pages/RegistoYControl/RegistroYControl"
import Estudiantes from "../../pages/Estudiantes/Estudiantes"


export default function Rutas() {
  return (
    <>
    <Menu></Menu>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/registroycontrol" element={<RegistroYControl/>}></Route>
        <Route path="/estudiantes" element={<Estudiantes/>}></Route>
      </Routes>
      <Footer></Footer>
    </>
  )
}
