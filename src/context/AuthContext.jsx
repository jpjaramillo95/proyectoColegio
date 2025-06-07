import { createContext, useContext, useEffect, useState } from 'react'

export const AuthProvider = createContext();

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
    }

    function logout(){
      setUser(null);
      localStorage.removeItem('userData');
    }

  return (
    <AuthProvider.Provider value={{user, login, logout, loading}}>
      {children}
    </AuthProvider.Provider>
  )
}

// crear un hook para obtener el usuario
export function UseAuth(){
  return useContext(AuthProvider);
}