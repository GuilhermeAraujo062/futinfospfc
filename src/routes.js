import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./pages/Inicio";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />}/>

        <Route path="*" element={<div>ERROR 404</div>}/>
      </Routes>
    
    </BrowserRouter>
  );
}

export default AppRoutes;
