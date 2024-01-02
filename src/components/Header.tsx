import React from 'react'
import '../stylesheets/Header.css'
import logo from '../images/RedCampLogo.png'

const Header = () => {
  return (
    <div className='navbar'>
      <img className='logo' src={logo} alt='logo RedCamp CQB' />
      <ul className='nav'>
        <li>
          <a href='#'>Inicio</a>
        </li>
        <li>
          <a href='#'>Ubícanos</a>
        </li>
        <li>
          <a href='#'>Nosotros</a>
        </li>
        <li>
          <a href='#'>Comunidad</a>
        </li>
        <li>
          <a href='#'>Iniciar sesión</a>
        </li>
      </ul>
    </div>
  )
}

export default Header
