import Inicio from './Inicio'
import Contacto from './Contacto'
import { Route, Routes, Router } from 'react-router-dom'

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
      </div>
  )
}

export default App
