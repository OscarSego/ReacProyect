import { useState } from 'react'
import Headers from './components/header/Headers'
import Body from './components/body/Body'
import ContactPage from './components/contactoBody/ContactoBody'

function Contacto() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Headers></Headers>
      <ContactPage></ContactPage>
    </>
  )
}

export default Contacto