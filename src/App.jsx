import { Routes, Route } from "react-router-dom"
import HomePagina from "./pages/HomePagina"


function App() {

  return (
    <>
      <div className="font-Quicksand">
        <Routes>
          <Route path="/" element={<HomePagina />} />
        </Routes>
      </div>
    </>
  )
}

export default App
