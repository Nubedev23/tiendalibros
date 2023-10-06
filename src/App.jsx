import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import TituloTienda from './components/TituloTienda/TituloTienda'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar/>
      <ItemListContainer greeting = "¡Bienvenid@ a la librería online!"/>
      <TituloTienda saludo="Mini Tienda de Libros Online"/>
    </>
  )
}

export default App
