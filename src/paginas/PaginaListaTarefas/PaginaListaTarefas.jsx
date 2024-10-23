import BotaoCustomizado from "../../comum/componentes/BotaoCustomizado/BotaoCustomizado";
import Principal from "../../comum/componentes/Principal/Principal";
import { useState } from "react";
import { FaCheck } from "react-icons/fa6";
import { FaTrashCan } from "react-icons/fa6";

const PaginaListaTarefas = () => {
  const [descricao, setDescricao] = useState("");
  const [tarefas, setTarefas] = useState([]);

  const adicionarNaLista = () => {
    if (descricao && descricao.trim()) {
      tarefas.push({descricao, feita: false});
      setTarefas([...tarefas]);
    } else {
      alert("Preencha o campo Descrição");
    }
    setDescricao("");
    document.getElementById("campoDescricao").focus();
  };

  const removerDaLista = (index) => {
    tarefas.splice(index, 1);
    setTarefas([...tarefas]);
  };

  return (
    <div>
      <Principal titulo="Lista de Tarefas" voltarPara="/">
        <div>
          <input
            id="campoDescricao"
            type="text"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            onKeyUp={(e) => {
              if (e.key === "Enter") {
                adicionarNaLista();
              }
            }} 
          />  <FaCheck size={24} onClick={adicionarNaLista} />
        </div>

        <ul>
          {tarefas.map((item, index) => {
            return (
              <li key={index}>
                {item}   <FaTrashCan color="grey" onClick={() => removerDaLista(index)} />
              </li>
            );
          })}
        </ul>
        {tarefas.length === 0 &&(
          <span className="'pagina-lista-tarefas_mensagem-vazia">
            Não tem tarefa pra listar.
          </span>
        )}
      </Principal>
    </div>
  );
};

export default PaginaListaTarefas;
