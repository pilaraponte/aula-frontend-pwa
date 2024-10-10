import { useNavigate } from 'react-router-dom';
import BotaoCustomizado from '../../comum/componentes/BotaoCustomizado/BotaoCustomizado';
import Principal from '../../comum/componentes/principal/Principal';
import './PaginaInicial.css';

const PaginaInicial = () => {
  const navigate = useNavigate();

  return (
    <Principal titulo="Página Inicial">
      <BotaoCustomizado
        cor="primaria"
        aoClicar={() => navigate('/lista-produtos')}
      >
        Lista Produtos
      </BotaoCustomizado>
    </Principal>
  );
};

export default PaginaInicial;