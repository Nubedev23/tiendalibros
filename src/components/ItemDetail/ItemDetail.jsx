import React from 'react'
import './ItemDetail.css'

const ItemDetail = ({id, titulo, precio, img}) => {
  return (
    <div className='contenedorItem'>
        <h2>Titulo: {titulo}</h2>
        <h2>Precio: {precio}</h2>
        <h3>ID: {id}</h3>
        <img src={img} alt={titulo} />
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione ipsa modi optio temporibus minus, labore amet atque saepe voluptate asperiores impedit hic nobis totam perspiciatis vel illum similique! Quisquam, aperiam!</p>
    </div>
  )
}

export default ItemDetail