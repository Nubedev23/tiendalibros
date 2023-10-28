import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({id,titulo,precio,img}) => {
  return (
    <div className='cardProducto'>
        <img src={img} alt={titulo}/>
        <h3>Título: {titulo}</h3>
        <p>Precio: {precio} </p>
        <p>ID: {id}</p>
        <Link to={`/item/${id}`}>Ver detalles</Link>
    </div>
  )
}

export default Item