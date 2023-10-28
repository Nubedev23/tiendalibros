import React from 'react'
import {useState, useEffect } from 'react';

const Categorias = () => {
    const [categoria, setCategoria] = useState("");
    useEffect(() => {
        document.title = `Categoria ${categoria}`;
    }, [categoria])
    const manejadorCategoria = (categoria) => {
        setCategoria(categoria)
    }
    return (
    <div>
        <h2>Categoría de Libros</h2>
        <h2>{categoria}</h2>
        <button onClick={() => manejadorCategoria("Romance")}>Romance</button>
        <button onClick={() => manejadorCategoria("Ciencia ficción")}>Ciencia ficción</button>
        <button onClick={() => manejadorCategoria("Historia")}>Historia</button>
        <button onClick={() => manejadorCategoria("Infantil")}>Infantil</button>
        <button onClick={() => manejadorCategoria("Terror")}>Terror</button>
        <button onClick={() => manejadorCategoria("Cómics")}>Cómics</button>
    </div>
  )
}


export default Categorias