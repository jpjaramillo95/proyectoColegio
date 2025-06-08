import { Navigate, Outlet} from "react-router-dom"
import { useAuth } from '../../../context/AuthContext';
import LoadingSpinner from "../../common/loadingSpinner";

export default function ConfigRutaPublica() {

    let {user, loading} = useAuth();
  
if (loading) {
  return <LoadingSpinner />;
}

  // if(user){
  //   let redirectPath = user.rol == "admin"
  //   ? "/home" :
  //   user.rol == "profesor"
  //   ? "/home" :
  //   user.rol == "secretaria"
  //   ? "/home" :
  //   "/home";
  //   return <Navigate to={redirectPath} replace/>
  // }

  // return <Outlet/>

  if (!user || user) {
  return <Outlet />; // Permitir acceso solo si no hay usuario autenticado
}

return <Navigate to="/home" replace />;
}
