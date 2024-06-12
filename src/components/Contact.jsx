import React, { useContext } from 'react'
import { Context } from '../context/Context'

export const Contact = () => {

  const {user} = useContext(Context)
  return (
    <div>
        <h1>Pagina de Contacto</h1>
        <p>Nombre: {user.name} {user.last_name}</p>
      
    </div>
  )
}
