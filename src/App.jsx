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

      </Routes>
    </Router>
  
  )
}

export default App