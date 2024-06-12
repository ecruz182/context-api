import React from 'react'
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
import { Home } from '../components/Home'
import { Articles } from '../components/Articles'
import { About } from '../components/About'
import { Contact } from '../components/Contact'
import { Login } from '../components/Login'
import { ErrorPage } from '../components/ErrorPage'


const AppRouter = () => {
  return (
    <Router>
        {/* menu de navegacion */}
        <header className='header-nav'>
            <nav>
            <div className='logo'>
                <h2>LOGO</h2>
            </div>
            <ul>
                <li>
                <NavLink to='/'>Inicio</NavLink>
                </li>
                <li>
                <NavLink to='/articulos'>Artículos</NavLink>
                </li>
                <li>
                <NavLink to='/acerca'>Acerca de</NavLink>
                </li>
                <li>
                <NavLink to='/contacto'>Contacto</NavLink>
                </li>
                <li>
                <NavLink to='/login'>Identifícate</NavLink>
                </li>
            </ul>
            </nav>
        </header>

        <section className='content'>
            {/* Configuracion de las rutas*/}
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/inicio' element={<Home />}></Route>
                <Route path='/articulos' element={<Articles />}></Route>
                <Route path='/acerca' element={<About />}></Route>
                <Route path='/contacto' element={<Contact />}></Route>
                <Route path='/login' element={<Login />}></Route>
                <Route path='*' element={<ErrorPage/>}></Route>
            </Routes>
        </section>
    </Router>
  )
}

export default AppRouter
