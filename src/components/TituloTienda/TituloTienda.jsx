import React from 'react'
import './TituloTienda.css';

const TituloTienda = (props) => {
  return (
    <h1 className='titulo'>{props.saludo}</h1>
  )
}

export default TituloTienda