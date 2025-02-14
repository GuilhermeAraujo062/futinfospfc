import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Sobre from "./pages/Sobre";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />}/>
        <Route path="/Sobre" element={<Sobre />}/>

        <Route path="*" element={<div>ERROR 404</div>}/>
      </Routes>
    
    </BrowserRouter>
  );
}

export default AppRoutes;
