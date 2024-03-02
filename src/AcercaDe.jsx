import { useState } from 'react'
import Headers from './components/header/Headers'
import SobreNosotros from './components/sobreNosotros/sobreNosotros'

function AcercaDe() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Headers></Headers>
      <SobreNosotros></SobreNosotros>
    </>
  )
}

export default AcercaDe