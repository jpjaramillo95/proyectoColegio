import { Route, Routes } from "react-router-dom";
import Menu from "../../common/Menu";
import Footer from "../../common/Footer";
import RegistroYControl from "../../pages/RegistoYControl/RegistroYControl";
import Estudiantes from "../../pages/Estudiantes/Estudiantes";
import Asistencia from "../../pages/Asistencia/Asistencia";
import Notas from "../../pages/Notas/Notas";
import RoleRoutes from "../RoleRoutes/RoleRoutes";

export default function RutasPrivadas() {
  return (
    <>
    <Menu></Menu>
    <Routes>
        <Route path="/registroycontrol" element={
            <RoleRoutes allowedRoles={["admin", "secretaria"]}>
                <RegistroYControl/>
            </RoleRoutes>
            }>
            </Route>
        <Route path="/estudiantes" element={
            <RoleRoutes allowedRoles={["admin","profesor", "secretaria"]}>
                <Estudiantes/>
            </RoleRoutes>
            }>
            </Route>
        <Route path="/asistencia" element={
            <RoleRoutes allowedRoles={["admin", "profesor"]}>
                <Asistencia/>
            </RoleRoutes>
            }>
        </Route>
        <Route path="/notas" element={
            <RoleRoutes allowedRoles={["admin", "profesor"]}>
                <Notas />
            </RoleRoutes>
            }>
            </Route>
    </Routes>
    <Footer></Footer>
    </>
  )
}
