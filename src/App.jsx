import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

import VerificarAutenticacao from "./comum/componentes/VerificarAutenticacao/VerificarAutenticacao";
import ListaProdutos from "./paginas/ListaProdutos/ListaProdutos";
import PaginaInicial from "./paginas/PaginaInicial/PaginaInicial";
import PaginaListaClientes from "./paginas/PaginaListaClientes/PaginaListaClientes";
import PaginaListaTarefas from "./paginas/PaginaListaTarefas/PaginaListaTarefas";
import PaginaLogin from "./paginas/PaginaLogin/PaginaLogin";
import PaginaMeuPerfil from "./paginas/PaginaMeuPerfil/PaginaMeuPerfil";
import PaginaNovoUsuario from "./paginas/PaginaNovoUsuario/PaginaNovoUsuario";
import PaginaCadastroCliente from "./paginas/PaginaCadastroClientes/PaginaCadastroClientes";

const router = createBrowserRouter([
  {
    path: "login",
    element: <PaginaLogin />,
  },
  {
    path: "novo-usuario",
    element: <PaginaNovoUsuario />,
  },
  {
    path: "",
    element: <VerificarAutenticacao />,
    children: [
      {
        path: "",
        element: <PaginaInicial />,
      },
      {
        path: "lista-produtos",
        element: <ListaProdutos />,
      },
      {
        path: "lista-tarefas",
        element: <PaginaListaTarefas />,
      },
      {
        path: "lista-clientes",
        element: <PaginaListaClientes />,
      },
      {
        path: "cadastro-clientes/:id?",
        element: <PaginaCadastroCliente />,
      },
      {
        path: "meu-perfil",
        element: <PaginaMeuPerfil />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  );
}

export default App;
