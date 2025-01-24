import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header/>

      <Routes>
        <Route path="/" element={<Inicio />}/>

        <Route path="*" element={<div>ERROR 404</div>}/>
      </Routes>
    
    </BrowserRouter>
  );
}

export default App;
