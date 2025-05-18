import { StrictMode } from "react"; //Utilizando bibliotecas do npm dentro do projeto
import { createRoot } from "react-dom/client"; //Utilizando bibliotecas do npm dentro do projeto
import App from "./App.jsx";
import TaskPage from "./pages/TaskPage";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  //Cria um roteador baseado em URLs padrão de navegador
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/task",
    element: <TaskPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  //document.getElementById('root') acessa o elemento HTML com id="root" que está dentro do arquivo index.html
  //O createRoot é uma função usada para criar uma "raiz" React dentro do elemento HTML especificado
  //render é o comando que renderiza um componente React dentro da root criada
  //RouterProvider é um componente que recebe um roteador e torna esse roteador acessível a toda a aplicação.
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
