import React from 'react'
import { useContext } from 'react';
import { CarritoContext } from '../../context/CarritoContext';
import './CartWidget.css';
import { Link } from 'react-router-dom';
const CartWidget = () => {
  const {cantidadTotal} = useContext(CarritoContext);

    const imageCarrito = "../carrt.png"
  return (
    <div>
      <Link to="/cart">
        <img className='imgCarrito' src={imageCarrito} alt="Un Carrito de compras" />
        {
          cantidadTotal > 0 && <strong className="cartNumber">{cantidadTotal}</strong>
        }
      </Link>
    </div>
  )
}

export default CartWidget