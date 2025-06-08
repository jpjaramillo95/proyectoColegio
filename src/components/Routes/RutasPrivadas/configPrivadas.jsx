import { Navigate, Outlet} from "react-router-dom"
import { useAuth } from "../../../context/AuthContext";
import LoadingSpinner from "../../common/loadingSpinner";
import { useEffect, useState } from "react";

export default function ConfigPrivadas() {
    
    let { user, loading} = useAuth();
    let [spinner, setSpinner] = useState(true);

    useEffect(() => {
      let time = setTimeout(() => {
        setSpinner(false);
      }, 4000);
      return()=> clearTimeout(time)
    }, []);
  
if (loading || spinner) {
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
