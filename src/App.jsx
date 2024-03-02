import Inicio from './Inicio'
import Contacto from './Contacto'
import { Route, Routes, Router } from 'react-router-dom'
import AcercaDe from './AcercaDe'

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path='/acercaDe' element={<AcercaDe />}/>
      </Routes>
      </div>
  )
}

export default App
