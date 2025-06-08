import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";
import LoadingSpinner from "../../common/loadingSpinner";

export default function RoleRoutes({allowedRoles}) {
    let {user, loading} = useAuth();

    if (loading) {
      return <LoadingSpinner />;
    }
  
    // Si no hay usuaruio, redirigir a la página de login
    if(!user){
      return <Navigate to="/login" replace/>
    }

    // Si el usuario no tiene el rol, redirigir a la página de inicio
    if(!allowedRoles.includes(user.rol)){
      return <Navigate to="/home" replace/>
    }

    // Usuario logueado, redirigir a la página de inicio
    return <Outlet/>

}
