import React, { useContext } from 'react'
import { Context } from '../context/Context'

export const Home = () => {

    const contextShare = useContext(Context)

    console.log(contextShare)
    return (
        <div>
            <h1>Pagina de Inicio</h1>
            <p>Hola bienvenido <strong>{contextShare.user.name}</strong> a mi pagina de incio</p>
        </div>
    )
}
