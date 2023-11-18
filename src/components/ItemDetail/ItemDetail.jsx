import React from 'react'
import { useState } from 'react'
import Contador from '../Contador/Contador'
import { Link } from 'react-router-dom'
import './ItemDetail.css'
import { CarritoContext } from '../../context/CarritoContext'
import { useContext } from 'react'


const ItemDetail = ({id, titulo, precio, img, autor, stock}) => {
  const [agregarCantidad, setAgregarCantidad] = useState(0);

  const {agregarAlCarrito} = useContext(CarritoContext);
  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);
    const item = {id, titulo, precio};
    agregarAlCarrito(item, cantidad);
  }
  
  return (
    <div className='contenedorItem'>
        <h2>Título: {titulo}</h2>
        <h2>Precio: ${precio}</h2>
        <h3>Autor: {autor}</h3>
        <h3>ID: {id}</h3>
        <h4>Sólo nos quedan: {stock} libros</h4>
        <img src={img} alt={titulo} />
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione ipsa modi optio temporibus minus, labore amet atque saepe voluptate asperiores impedit hic nobis totam perspiciatis vel illum similique! Quisquam, aperiam!</p>
      
        {
          agregarCantidad > 0 ? (<Link to="/cart">Terminar Compra</Link>) : (<Contador inicial= {1} stock= {stock} funcionAgregar={manejadorCantidad}/>)
        }
    
    </div>
  )
}

export default ItemDetail