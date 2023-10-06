import React from 'react'
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
const NavBar = () => {
  return (
    <header>
        <h1>La mejor librería online a tu alcance</h1>
        <nav>
            <ul>
                <li>Romance</li>
                <li>Fantasía</li>
                <li>Ciencia Ficción</li>
                <li>Historia</li>
                <li>Infantil</li>
                <li>Autoayuda</li>
                <li>Terror</li>
                <li>Cómics</li>
            </ul>
        </nav>
        <CartWidget/>
    </header>
  )
}

export default NavBar