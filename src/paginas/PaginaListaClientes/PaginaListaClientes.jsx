import Principal from "../../comum/componentes/Principal/Principal";
import { Link } from "react-router-dom";

const PaginaListaClientes = () => {
  return (
    <Principal titulo="Lista de Clientes" voltarPara="/">
      <Link to="/cadastro-clientes">Novo</Link>
    </Principal>
  );
};

export default PaginaListaClientes;
