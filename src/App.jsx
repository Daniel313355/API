import { useState } from 'react'
import './App.css'
import Aleatorios from './Componentes/Aleatorios'
import Detalle from './Componentes/Detalle'
import Favoritos from './Componentes/Favoritos'
import Listar from './Componentes/Listar'
import Original from './Componentes/Original'
import Usuarios from './Componentes/Usuarios'

function App() {

  return (
    <>
      <Aleatorios />
      <Detalle />
      <Favoritos />
      <Listar />
      <Original />
      <Usuarios />
    </>
  )
}

export default App