<<<<<<< HEAD
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import './App.css';
import Cabecalho from './comum/componentes/cabecalho/Cabecalho';
import Rodape from './comum/componentes/rodape/Rodape';
import PaginaInicial from './paginas/PaginaInicial/PaginaInicial';
import ListaProdutos from './paginas/ListaProdutos/ListaProdutos';

const router = createBrowserRouter([
  {
    path: '',
    element: <PaginaInicial />,
  },
  {
    path: 'lista-produtos',
    element: <ListaProdutos />,
  },
]);

function App() {
  return (
    <>
      <Cabecalho />
      <RouterProvider router={router} />
      <Rodape />
    </>
  );
}

export default App;
=======
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cabecalho from './comum/componentes/cabecalho/Cabecalho'
import Principal from './comum/componentes/principal/Principal'
import Rodape from './comum/componentes/rodape/Rodape'
import Avatar from './comum/componentes/Avatar/Avatar'

function App() {

  return (
  <>
    <Cabecalho/>
    <Principal/>
    <Rodape/>
    <Avatar/>
  </>
  );
}

export default App
>>>>>>> bd0b5718edf035bf3a8cdcedde8a2d226201852e
