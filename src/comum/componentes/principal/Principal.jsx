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
}

export default Principal;