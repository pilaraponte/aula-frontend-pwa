import Principal from "../../comum/componentes/Principal/Principal";
import { Link } from "react-router-dom";
import ServicoCliente from "../../comum/servicos/ServicoCliente";
import { useEffect, useState } from "react";
import "./PaginaListaClientes.css";
import { FaPencil, FaTrash } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const servicoCliente = new ServicoCliente();

const PaginaListaClientes = () => {
  const navigate = useNavigate();
  const [listaClientes, setListaClientes] = useState([]);

  useEffect(() => {
    const clientesDoLocalStorage = servicoCliente.listar();
    setListaClientes(clientesDoLocalStorage);
  }, []);

  const navegarParaEdicao = (idCliente) => {
    navigate(`/cadastro-clientes/${idCliente}`);
  };

  return (
    <Principal titulo="Lista de Clientes" voltarPara="/">
      <Link to="/cadastro-clientes">Novo</Link>

      {listaClientes.map((cliente) => {
        return (
          <div key={cliente.id} className="pagina-lista-clientes_item-cliente">
            {cliente.nome}
            <div>
              <FaPencil
                size={20}
                color="red"
                onClick={() => navegarParaEdicao(cliente.id)}
                cursor="pointer"
              />
              <FaTrash size={20} />
            </div>
          </div>
        );
      })}
    </Principal>
  );
};

export default PaginaListaClientes;
