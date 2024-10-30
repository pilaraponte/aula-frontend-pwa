import Principal from "../../comum/componentes/Principal/Principal";
import { Link, json } from "react-router-dom";
import ServicoCliente from "../../comum/servicos/ServicoCliente";

const PaginaListaClientes = () => {
  const servicoCliente = new ServicoCliente();
  const clientesDoLocalStorage = servicoCliente.listar();

  return (
    <Principal titulo="Lista de Clientes" voltarPara="/">
      <Link to="/cadastro-clientes">Novo</Link>

      <pre>{JSON.stringify(clientesDoLocalStorage, null, 2)}</pre>
    </Principal>
  );
};

export default PaginaListaClientes;
