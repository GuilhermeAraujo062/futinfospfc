import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Sobre from "./pages/Sobre";
import Jogos from "pages/Jogos";
import Elenco from "pages/Elenco";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />}/>
        <Route path="/Sobre" element={<Sobre />}/>
        <Route path="/Elenco" element={<Elenco />}/>
        <Route path="/Jogos" element={<Jogos />}/>

        <Route path="*" element={<div>ERROR 404</div>}/>
      </Routes>
    
    </BrowserRouter>
  );
}

export default AppRoutes;
