import { Navigate, Route, Routes } from "react-router-dom";
import Menu from "../../common/Menu";
import Home from "../../pages/Home/Home";
import Footer from "../../common/Footer";
import RegistroYControl from "../../pages/RegistoYControl/RegistroYControl";
import Estudiantes from "../../pages/Estudiantes/Estudiantes";
import Login from "../../pages/Login/Login";
import Notas from "../../pages/Notas/Notas";
import RoleRoutes from "../RoleRoutes/RoleRoutes";
import Asistencia from "../../pages/Asistencia/Asistencia";
import { useState } from "react";
import AuthContext from "../../../context/AuthContext";
import ConfigRutaPublica from "./configRutaPublica";
import ConfigPrivadas from "../RutasPrivadas/configPrivadas";
import NotFound from "../../pages/NotFound/NotFound";

export default function Rutas() {

  let [isAuthenticated, setIsAuthenticated] = useState(false);

  let handleLogin = () => {
    setIsAuthenticated(true);
  }

  return (
    <>
      <Menu></Menu>
      <AuthContext>
      <Routes>
        {/* Rutas públicas */}
        <Route element={<ConfigRutaPublica />}>
          <Route path="/" element={isAuthenticated ? <Navigate to="/home" /> : <Home/>}></Route>
          <Route path="/login" element={isAuthenticated ? <Navigate to="/home" /> : <Login onLogin={handleLogin} />}></Route>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="*" element={<Login />}></Route>
        </Route>

        {/* Rutas privadas */}
        <Route element={<ConfigPrivadas />}>
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
        </Route>

        {/*ruta 404*/}
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      </AuthContext>
      <Footer></Footer>
    </>
  );
}
