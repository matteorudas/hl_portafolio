import { BrowserRouter, Route, Routes } from "react-router-dom"; // Intalar biblioteca com npm install react-router-dom
import Menu from "./componentes/Menu";
import Inicio from "./paginas/Inicio";
import Sobremi from "./paginas/Sobremi";
import PiedePagina from "./componentes/PiedePagina";
import PaginaPatron from "./componentes/PaginaPatron";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu/>
      <Routes>
        <Route path="/" element={<PaginaPatron/>}>
          <Route index element={<Inicio/>}/>
          <Route path="sobre" element={<Sobremi/>}/>
        </Route>
        <Route path="*" element={<div>Pagina no encontrada</div>}/>
      </Routes>
      <PiedePagina/>
    </BrowserRouter>
  );
}

export default AppRoutes;
