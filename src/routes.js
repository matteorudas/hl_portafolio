import { BrowserRouter, Route, Routes } from "react-router-dom"; // Intalar biblioteca com npm install react-router-dom
import Menu from "./componentes/Menu";
import Inicio from "./paginas/Inicio";
import Sobremi from "./paginas/Sobremi";
import PiedePagina from "./componentes/PiedePagina";
import PaginaPatron from "./componentes/PaginaPatron";
import Post from "./paginas/Post";
import NoEncontrada from "./paginas/Noencontrada";
import ScrollToTop from "./componentes/ScrollToTop";

function AppRoutes() {
  return (
    <BrowserRouter>
    <ScrollToTop/>
      <Menu/>
      <Routes>
        <Route path="/" element={<PaginaPatron/>}>
          <Route index element={<Inicio/>}/>
          <Route path="sobre" element={<Sobremi/>}/>
        </Route>
        <Route path="posts/:id/*" element={<Post/>}/>
        <Route path="*" element={<NoEncontrada/>}/>
      </Routes>
      <PiedePagina/>
    </BrowserRouter>
  );
}

export default AppRoutes;
