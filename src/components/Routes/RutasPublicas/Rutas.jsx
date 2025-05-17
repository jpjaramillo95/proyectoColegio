import { Route, Routes } from "react-router-dom"
import Home from "../../pages/Home/Home"
import Menu from "../../common/menu"


export default function Rutas() {
  return (
    <>
    <Menu></Menu>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
      </Routes>
    </>
  )
}
