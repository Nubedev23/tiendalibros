import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import TituloTienda from './components/TituloTienda/TituloTienda'
import Categorias from './components/Categorias/Categorias'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CarritoProvider } from './context/CarritoContext'
import Cart from './components/Cart/Cart'
import Checkout from './components/Checkout/Checkout'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <CarritoProvider>
          <NavBar/>
          <Routes>
            <Route path='/' element={ <ItemListContainer greeting = "¡Bienvenid@ a la librería online!"/> }/>
            <Route path='/categoria/:idCategoria' element={ <ItemListContainer/>}/>
            <Route path='/item/:idItem' element={<ItemDetailContainer/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/checkout' element={<Checkout/>}/>       
            <Route path='*' element={<h1>Error vuelva más tarde. </h1>}/>
          </Routes>
          <TituloTienda saludo="Mini Tienda de Libros Online"/>
        </CarritoProvider>
      </BrowserRouter>
    </>
  )
}

export default App
