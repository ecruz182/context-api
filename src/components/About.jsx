import React, { useContext } from 'react'
import { Context, Context2 } from '../context/Context'

export const About = () => {

  const objectContext = useContext(Context)
  const objectContext2 = useContext(Context2)

  return (
    <div>
        <h1>Pagina de Inicio</h1>
        <p>Hola bienvenido a mi pagina de acerca de nosotros</p>
        <pre>{JSON.stringify(objectContext)}
        </pre>
        <p>contexto 2 {objectContext2}</p>
    </div>
  )
}
