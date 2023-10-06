import React from 'react'
import './CartWidget.css';
const CartWidget = () => {
    const imageCarrito = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXnPjEGWfHJ2EOWxfYUAHEGS5URAfSnRVQtaAqRIgG6Jm3onx9eMbJN2VbY5oaBROYJas&usqp=CAU"
  return (
    <div>
        <img className='imageCarrito' src={imageCarrito} alt="Un Carrito de compras" />
        <p className="cartNumber"> 2 </p>
    </div>
  )
}

export default CartWidget