import React from 'react'
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <header>
      <Link to="/">
        <img src={"./book-logo.png"}alt="Logo Librería" className="logoLibreria" />
      </Link>
        
        <h1>La mejor librería online a tu alcance</h1>
        <nav>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="categoria/2">Romance</NavLink>
              </li>
              <li>
                <NavLink to="categoria/3">Fantasía</NavLink>
              </li>
              <li>
                <NavLink to="categoria/4">Ciencia Ficción</NavLink>
              </li>
              <li>
                <NavLink to="categoria/5">Misterio</NavLink>
              </li>
              <li>
                <NavLink to="categoria/6">Infantil</NavLink>
              </li>
                
            </ul>
        </nav>
        <CartWidget/>
    </header>
  )
}

export default NavBar