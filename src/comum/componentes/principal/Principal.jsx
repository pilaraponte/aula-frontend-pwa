<<<<<<< HEAD
import {children} from 'react';
import './Principal.css';
import { Link } from 'react-router-dom';

function Principal({voltarPara, titulo, children}) {
  return (
  <main className="principal_root">
  <div className='principal_titulo'>
      {voltarPara && <Link to={voltarPara}>{'Voltar'}</Link>}      
      <h1>{titulo}</h1>
  </div>

     {children}
     </main>
  );
=======
import BotaoCustomizado from '../BotaoCustomizado/BotaoCustomizado';
import './Principal.css';

function Principal(){
    return <main className='principal_root'>Principal
    
    <BotaoCustomizado>Salvar</BotaoCustomizado>
    </main>


    
>>>>>>> bd0b5718edf035bf3a8cdcedde8a2d226201852e
}

export default Principal;