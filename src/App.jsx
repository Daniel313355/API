import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Aleatorios from './Componentes/Aleatorios'
import Detalle from './Componentes/Detalle'
import Favoritos from './Componentes/Favoritos'
import Listar from './Componentes/Listar'
import Menu from './Componentes/Menu'
import Original from './Componentes/Original'
import Usuarios from './Componentes/Usuarios'

function App() {

  return (
    <Router>
      <Menu />
      <Routes>
        <Route path="/" element={<Aleatorios />} />
        <Route path="/Detalle" element={<Detalle />} />
        <Route path="/Favoritos" element={<Favoritos />} />
        <Route path="/Listar" element={<Listar />} />
        <Route path="/Original" element={<Original />} />
        <Route path="/Usuarios" element={<Usuarios />} />        
      </Routes>
    </Router>
  
  )
}

export default App