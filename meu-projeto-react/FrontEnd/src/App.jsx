import { useLocation} from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
import { AnimatePresence } from "framer-motion";
import Footer from './componentes/footer/Footer.jsx'
import Header from './componentes/Header/Header.jsx'
import Inicial from './paginas/Inicial/Inicial.jsx'
import Interface from './paginas/Interface/Interface.jsx'
import Categorias from './paginas/Categorias/Categorias.jsx'
import Perfil from './paginas/Perfil/Perfil.jsx'
import Professores from './paginas/Professores/Professores.jsx'
import Cadastro from './paginas/Acesso/Cadastro.jsx'
import FormularioLogin from './paginas/Acesso/FormularioLogin.jsx'

const App = () => {

  const location = useLocation()


  const naoTem = ['/login', '/cadastro', '*'];
  const hide = naoTem.includes(location.pathname)

  return (
    <div className="conteiner-principal">
      {!hide && <Header />}

      <main className="conteiner-flexivel">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Inicial />} />

            <Route path="/interface" element={<Interface />} />

            <Route path="/categorias" element={<Categorias />} />

            <Route path="/perfil" element={<Perfil />} />

            

            <Route path="/professores" element={<Professores />} />

            <Route path="/cadastro" element={<Cadastro />} />

            <Route path="/login" element={<FormularioLogin />} />

            <Route path="*" element={<h1>404 - Página Não Encontrada</h1>} />
          </Routes>
        </AnimatePresence>
      </main>

      {!hide && <Footer />}
    </div>
  );
}

export default App