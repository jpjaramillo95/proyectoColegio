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
        </Route>

        {/* Rutas privadas */}
        <Route element={<ConfigPrivadas />}>
          <Route element={<RoleRoutes allowedRoles={["admin", "secretaria"]} />}>
            <Route path="/registroycontrol" element={<RegistroYControl />}></Route>
          </Route>
          <Route element={<RoleRoutes allowedRoles={["admin", "secretaria", "profesor"]} />}>
            <Route path="/estudiantes" element={<Estudiantes />}></Route>
          </Route>
          <Route element={<RoleRoutes allowedRoles={["admin", "profesor"]} />}>
            <Route path="/asistencia" element={<Asistencia />}></Route>
            <Route path="/notas" element={<Notas />}></Route>
          </Route>
        </Route>

        {/*ruta 404*/}
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      </AuthContext>
      <Footer></Footer>
    </>
  );
}
