import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BotaoCustomizado from "../../comum/componentes/BotaoCustomizado/BotaoCustomizado";
import Principal from "../../comum/componentes/Principal/Principal";
import ServicoCliente from "../../comum/servicos/ServicoCliente";
import {
  formatarComMascara,
  MASCARA_CELULAR,
  MASCARA_CEP,
  MASCARA_CPF,
} from "../../comum/utils/mascaras";
import "./PaginaCadastroClientes.css";
import { toast } from "react-toastify";
import axios from "axios";

const instanciaServicoCliente = new ServicoCliente();

const PaginaCadastroCliente = () => {
  const navigate = useNavigate();
  const params = useParams();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [celular, setCelular] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [cpf, setCpf] = useState("");

  const [cep, setCep] = useState("");
  const [rua, setRua] = useState("");
  const [numero, setNumero] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");

  useEffect(() => {
    if (params.id) {
      const clienteEncontrado = instanciaServicoCliente.buscarPorId(params.id);
      if (clienteEncontrado) {
        setNome(clienteEncontrado.nome);
        setEmail(clienteEncontrado.email);
        setCelular(clienteEncontrado.celular);
        setDataNascimento(clienteEncontrado.dataNascimento);
        setCpf(clienteEncontrado.cpf);
      }
    }
  }, [params.id]);

  const salvar = () => {
    if (!nome || !email) {
      toast("Preencha todos os campos obrigatórios!");
      return;
    }

    const cliente = {
      id: params.id ? +params.id : Date.now(),
      nome,
      email,
      celular,
      dataNascimento,
      cpf,
    };
    if (params.id) {
      instanciaServicoCliente.editarCliente(cliente);
    } else {
      instanciaServicoCliente.cadastrarCliente(cliente);
    }
    navigate("/lista-clientes");
  };

  const buscarCep = async (event) => {
    try {
      console.log(event.target.value);
      const resp = await axios.get(
        `https://brasilapi.com.br/api/cep/v2/${event.target.value}`
      );
      console.log(resp.data);
      setRua(resp.data.street);
      setBairro(resp.data.neighborhood);
      setCidade(resp.data.city);
      if (resp.data.street) {
        document.getElementById("campoNumero").focus();
      }
    } catch {
      toast.error("CEP não encontrado.");
    }
  };

  return (
    <Principal
      titulo={params.id ? "Editar Cliente" : "Novo Cliente"}
      voltarPara="/lista-clientes"
    >
      {params.id && (
        <div className="campo">
          <label>Id</label>
          <input type="text" value={params.id} disabled />
        </div>
      )}

      <div className="campo">
        <label>Nome</label>
        <input
          type="text"
          placeholder="Digite seu nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
      </div>

      <div className="campo">
        <label>Email</label>
        <input
          type="email"
          placeholder="Digite seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="campo">
        <label>Celular</label>
        <input
          type="tel"
          placeholder="Digite o número do seu Whatsapp"
          value={celular}
          onChange={(e) =>
            setCelular(formatarComMascara(e.target.value, MASCARA_CELULAR))
          }
        />
      </div>

      <div className="campo">
        <label>Data Nascimento</label>
        <input
          type="date"
          placeholder="Digite sua data de nascimento"
          value={dataNascimento}
          onChange={(e) => setDataNascimento(e.target.value)}
        />
      </div>

      <div className="campo">
        <label>CPF</label>
        <input
          type="tel"
          placeholder="Digite seu CPF"
          value={cpf}
          onChange={(e) =>
            setCpf(formatarComMascara(e.target.value, MASCARA_CPF))
          }
        />
      </div>
      <div className="campo">
        <label>CEP</label>
        <input
          type="tel"
          placeholder="Digite seu CEP"
          value={cep}
          onChange={(e) =>
            setCep(formatarComMascara(e.target.value, MASCARA_CEP))
          }
          onBlur={buscarCep}
        />
      </div>
      <div className="campo">
        <label>RUA</label>
        <input
          type="text"
          placeholder="Digite sua Rua"
          value={rua}
          onChange={(e) => setRua(formatarComMascara(e.target.value))}
          maxLength={100}
        />
      </div>
      <div className="campo">
        <label>NUMERO</label>
        <input
          type="text"
          placeholder="Digite o número"
          value={numero}
          onChange={(e) => setNumero(formatarComMascara(e.target.value))}
          maxLength={100}
        />
      </div>
      <div className="campo">
        <label>BAIRRO</label>
        <input
          type="text"
          placeholder="Digite o Bairro"
          value={bairro}
          onChange={(e) => setBairro(formatarComMascara(e.target.value))}
          maxLength={100}
        />
      </div>
      <div className="campo">
        <label>CIDADE</label>
        <input
          type="text"
          placeholder="Digite a Cidade"
          value={cidade}
          onChange={(e) => setCidade(formatarComMascara(e.target.value))}
          maxLength={100}
        />
      </div>
      <BotaoCustomizado cor="secundaria" aoClicar={salvar}>
        Salvar
      </BotaoCustomizado>
    </Principal>
  );
};

export default PaginaCadastroCliente;
