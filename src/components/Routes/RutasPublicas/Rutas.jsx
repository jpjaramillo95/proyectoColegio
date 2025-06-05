import { Route, Routes } from "react-router-dom";
import Menu from "../../common/Menu";
import Home from "../../pages/Home/Home";
import Footer from "../../common/Footer";
import RegistroYControl from "../../pages/RegistoYControl/RegistroYControl";
import Estudiantes from "../../pages/Estudiantes/Estudiantes";
import Login from "../../pages/Login/Login";
import Notas from "../../pages/Notas/Notas";
import RoleRoutes from "../RoleRoutes/RoleRoutes";
import Asistencia from "../../pages/Asistencia/Asistencia";

export default function Rutas() {
  return (
    <>
      <Menu></Menu>
      <Routes>
        {/* Rutas públicas */}
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/home" element={<Home />}></Route>

        {/* Rutas privadas */}
        <Route
          path="/registroycontrol"
          element={
            <RoleRoutes allowedRoles={["admin", "secretaria"]}>
              <RegistroYControl />
            </RoleRoutes>
          }
        ></Route>
        <Route
          path="/estudiantes"
          element={
            <RoleRoutes allowedRoles={["admin", "profesor", "secretaria"]}>
              <Estudiantes />
            </RoleRoutes>
          }
        ></Route>
        <Route
          path="/asistencia"
          element={
            <RoleRoutes allowedRoles={["admin", "profesor"]}>
              <Asistencia />
            </RoleRoutes>
          }
        ></Route>
        <Route
          path="/notas"
          element={
            <RoleRoutes allowedRoles={["admin", "profesor"]}>
              <Notas />
            </RoleRoutes>
          }
        ></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}
