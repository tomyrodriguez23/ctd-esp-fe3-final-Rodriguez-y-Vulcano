import React from 'react'
import { useGlobalContext } from './utils/Global.context'
import { Link } from 'react-router-dom'
import {Rutas} from '../Components/utils/Rutas'


const Navbar = () => {

  const { Theme, handleThemeChange } = useGlobalContext()

  return (
    <nav className='navbar'
      style={{ background: Theme.bgNavbarFooter, color: Theme.color }}>
      <Link to={Rutas.home}><img src='/images/DH.png' className='logos' alt='digitalLogo' /></Link>
      <div>
        <Link to={Rutas.home}>Home</Link>
        <Link to={Rutas.contact}>Contact</Link>
        <Link to={Rutas.favs}>Favorites</Link>
        <i className={(Theme.color === 'black') ? 'fa-solid fa-moon' : 'fa sharp fa-light fa-sun'} onClick={handleThemeChange}></i>
      </div>
    </nav>
  )
}

export default Navbar