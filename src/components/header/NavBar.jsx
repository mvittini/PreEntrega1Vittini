import React from 'react'
import { Carrito } from '../Carrito'

export const NavBar = () => {
  return (
    <nav className='nav'>
      <ul className='nav-menu'>
        <li><a className='nav-link' href="#">Inicio</a></li>
        <li><a className='nav-link' href="#">Poleras</a></li>
        <li><a className='nav-link' href="#">Chaquetas</a></li>
        <li><a className='nav-link' href="#">Zapatos</a></li>
      </ul>
    </nav>
  )
}
