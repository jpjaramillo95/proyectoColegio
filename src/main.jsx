import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import Rutas from './components/Routes/RutasPublicas/Rutas'
import AuthContext from './context/AuthContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContext>
      <BrowserRouter>
        <Rutas />
      </BrowserRouter>
    </AuthContext>
  </StrictMode>,
)
