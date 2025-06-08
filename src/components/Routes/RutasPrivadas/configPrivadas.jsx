import { Navigate, Outlet} from "react-router-dom"
import { useAuth } from "../../../context/AuthContext";
import LoadingSpinner from "../../common/loadingSpinner";

export default function ConfigPrivadas() {
    
    let { user, loading} = useAuth();
  
if (loading) {
  return (
    <LoadingSpinner />
  );
}

// Si no hay usuaruio, redirigir a la página de login
if(!user){
  return <Navigate to="/login" replace/>
}

// Usuario logueado, redirigir a la página de inicio
  return <Outlet/>
}
