import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import TituloTienda from './components/TituloTienda/TituloTienda'
import Contador from './components/Contador/Contador'
import Categorias from './components/Categorias/Categorias'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      
        <NavBar/>
        <Routes>
          <Route path='/' element={ <ItemListContainer greeting = "¡Bienvenid@ a la librería online!"/> }/>
          <Route path='/categoria/:idCategoria' element={ <ItemListContainer/>}/>
          <Route path='/item/:idItem' element={<ItemDetailContainer/>}/>
        </Routes>
        <TituloTienda saludo="Mini Tienda de Libros Online"/>
       
      </BrowserRouter>
    </>
  )
}

export default App
