import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './paginas/Home/Home.jsx'
import CadastroP from './paginas/Formularios/CadastroP.jsx'
import Footer from './componentes/footer/Footer.jsx'
import Header from './componentes/Header/Header.jsx'
import Inicial from './paginas/Inicial/Inicial.jsx'
import Interface from './paginas/Interface/Interface.jsx'
import Categorias from './paginas/Categorias/Categorias.jsx'
import Perfil from './paginas/Perfil/Perfil.jsx'

const App = () => {
  return (
    <BrowserRouter>

    <div className='conteiner-principal'>

      <Header />

      <main className='conteiner-flexivel'>

        <Routes>
          <Route path="/" element={<Inicial />}/>
          <Route path="/cadastro" element={<CadastroP />}/>
          <Route path="/login" element={<Home />}/>
          <Route path="/professores" element={<Professores />}/>
          <Route path="/categorias" element={<Home />}/>
          <Route path="/interface" element={<Interface />}/>
        </Routes>

      </main>

       <Footer />

    </div>

    </BrowserRouter>
  )
}

export default App