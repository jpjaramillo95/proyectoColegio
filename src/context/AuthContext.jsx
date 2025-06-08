import { createContext, useContext, useEffect, useState } from 'react'

export const authProvider = createContext();

export default function AuthContext({children}) {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // verificar si el usuario está logueado
        let storedUser = localStorage.getItem('userData');
        if (storedUser){
            setUser(JSON.parse(storedUser));
        }
        setLoading(false);
    }, []);

    function login(formUser){
      setUser(formUser);
      localStorage.setItem('userData', JSON.stringify(formUser));
    }

    function logout(){
      setUser(null);
      localStorage.removeItem('userData');
      window.location.reload();
    }

  return (
    <authProvider.Provider value={{user, login, logout, loading}}>
      {children}
    </authProvider.Provider>
  )
}

// crear un hook para obtener el usuario
export function useAuth(){
  return useContext(authProvider);
}