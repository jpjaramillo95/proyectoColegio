import { createContext, useContext, useEffect, useState } from 'react'

export const authProvider = createContext();

export default function AuthContext({children}) {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);

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
      setUser(JSON.parse(localStorage.getItem('userData')));
    }

    function logout(){
      setUser(null);
      localStorage.removeItem('userData');
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