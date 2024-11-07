import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Cabecalho from "./comum/componentes/Cabecalho/Cabecalho";
import Rodape from "./comum/componentes/Rodape/Rodape";
import PaginaInicial from "./paginas/PaginaInicial/PaginaInicial";
import ListaProdutos from "./paginas/ListaProdutos/ListaProdutos";
import PaginaListaTarefas from "./paginas/PaginaListaTarefas/PaginaListaTarefas";
import PaginaDesafioComponentes from "./paginas/PaginaDesafioComponentes/PaginaDesafioComponentes";
import PaginaListaClientes from "./paginas/PaginaListaClientes/PaginaListaClientes";
import PaginaCadastroClientes from "./paginas/PaginaCadastroClientes/PaginaCadastroClientes";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import PaginaNovoUsuario from "./paginas/PaginaNovoUsuario/PaginaNovoUsuario";
import PaginaLogin from "./paginas/PaginaLogin/PaginaLogin";
import VerificarAutenticacao from "./comum/componentes/VerificarAutenticacao/VerificarAutenticacao";

const router = createBrowserRouter([
  {
    path: "",
    element: <PaginaInicial />,
  },
  {
    path: "",
    element: <VerificarAutenticacao />,
  },
  {
    path: "lista-produtos",
    element: <ListaProdutos />,
  },
  {
    path: "/lista-tarefas",
    element: <PaginaListaTarefas />,
  },
  {
    path: "/desafio-componentes",
    element: <PaginaDesafioComponentes />,
  },
  {
    path: "/lista-clientes",
    element: <PaginaListaClientes />,
  },
  {
    path: "/cadastro-clientes/:id?",
    element: <PaginaCadastroClientes />,
  },
  {
    path: "/novo-usuario",
    element: <PaginaNovoUsuario />,
  },
  {
    path: "/login",
    element: <PaginaLogin />,
  },
]);

function App() {
  return (
    <>
      <Cabecalho />
      <RouterProvider router={router} />
      <Rodape />
      <ToastContainer />
    </>
  );
}

export default App;
