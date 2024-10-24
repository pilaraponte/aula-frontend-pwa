import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Cabecalho from "./comum/componentes/Cabecalho/Cabecalho";
import Rodape from "./comum/componentes/Rodape/Rodape";
import PaginaInicial from "./paginas/PaginaInicial/PaginaInicial";
import ListaProdutos from "./paginas/ListaProdutos/ListaProdutos";
import BotaoContador from "./paginas/BotaoContador/BotaoContador";
import BotaoIncrementarDecrementar from "./paginas/BotaoIncrementarDecrementar/BotaoIncrementarDecrementar";
import PaginaListaTarefas from "./paginas/PaginaListaTarefas/PaginaListaTarefas";
import PaginaDesafioComponentes from "./paginas/PaginaDesafioComponentes/PaginaDesafioComponentes";

const router = createBrowserRouter([
  {
    path: "",
    element: <PaginaInicial />,
  },
  {
    path: "lista-produtos",
    element: <ListaProdutos />,
  },
  {
    path: "botao-contador",
    element: <BotaoContador />,
  },
  {
    path: "/botao-incremenar-decrementar",
    element: <BotaoIncrementarDecrementar />,
  },
  {
    path: "/lista-tarefas",
    element: <PaginaListaTarefas />,
  },
  {
    path: "/desafio-componentes",
    element: <PaginaDesafioComponentes />,
  },
]);

function App() {
  return (
    <>
      <Cabecalho />
      <RouterProvider router={router} />
      <Rodape />
    </>
  );
}

export default App;
