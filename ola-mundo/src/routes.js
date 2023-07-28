import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./paginas/Inicio";
import SobreMim from "./paginas/SobreMim";
import Menu from "./componentes/Menu";
import Rodape from "componentes/Rodape";
import PaginaPadrao from "componentes/PaginaPadrao";


function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu></Menu>
      <Routes>
        <Route path="/" element={<PaginaPadrao/>}>
          <Route path="/" element={<Inicio/>}/>
          <Route path="/sobremim" element={<SobreMim/>}/>
        </Route>

        {/* 
        
        Na rota “/”, a estrutura a ser renderizada é:

        <PagnaPadrao>
          <Inicio/>
        <PaginaPadrao/>

        Na rota “/sobremim”, a estrutura a ser renderizada é:

        <PagnaPadrao>
          <SobreMim/>
        <PaginaPadrao/>
        
        */}

        
        <Route path="*" element={<div>Página não encontrada</div>}/>
      </Routes>

      <Rodape/>

    </BrowserRouter>
  );
}

export default AppRoutes;
