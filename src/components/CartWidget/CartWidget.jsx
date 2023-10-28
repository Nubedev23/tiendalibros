import React from 'react'
import './CartWidget.css';
const CartWidget = () => {
    const imageCarrito = "./carrt.png"
  return (
    <div>
        <img className='imgCarrito' src={imageCarrito} alt="Un Carrito de compras" />
        <p className="cartNumber"> 2 </p>
    </div>
  )
}

export default CartWidget