import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./paginas/home/PaginaHome";
import PaginaCursos from "./paginas/cursos/PaginaCursos";
import CursosDetalhes from './paginas/cursos-detalhes/CursosDetalhes';
import Contato from './paginas/contato/Contato';
import CasesDeSucesso from './paginas/cases-de-sucesso/PaginaCasesDeSucesso'
import LandingPageWhats from './paginas/landing-pages/landing-page-whats/LandingPageWhats';
import LandingPageForm from './paginas/landing-pages/landign-page-form/LandingPageForm';
import SobreNos from './paginas/sobre-nos/SobreNos';
import Obrigado from './paginas/landing-pages/obrigado/obrigado'
import RolarParaTopo from './componentes/rolar-para-topo/RolarParaTopo'

function App() {

  return (
    <>
      <BrowserRouter>
        <RolarParaTopo />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cursos" element={<PaginaCursos />} />
          {/* <Route path="/cursos-detalhes" element={<CursosDetalhes />} /> */}
           <Route path="/curso/:id" element={<CursosDetalhes />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/cases-de-sucesso" element={<CasesDeSucesso />} />
          <Route path="/page-whatsapp" element={<LandingPageWhats />} />
          <Route path="/page-form" element={<LandingPageForm />} />
          <Route path="/sobre-nos" element={<SobreNos />} />
          <Route path="/obrigado" element={<Obrigado />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
