import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cabecalho from './comum/componentes/cabecalho/Cabecalho'
import Principal from './comum/componentes/principal/Principal'
import Rodape from './comum/componentes/rodape/Rodape'

function App() {

  return (
  <>
    <Cabecalho/>
    <Principal/>
    <Rodape/>
  </>
  );
}

export default App
