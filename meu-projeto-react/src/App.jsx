import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './componentes/footer/Footer.jsx'
import Header from './componentes/Header/Header.jsx'
import Inicial from './paginas/Inicial/Inicial.jsx'
import Interface from './paginas/Interface/Interface.jsx'
import Categorias from './paginas/Categorias/Categorias.jsx'
import Perfil from './paginas/Perfil/Perfil.jsx'
import Professores from './paginas/Professores/Professores.jsx'

const App = () => {
  return (
    <BrowserRouter>

    <div className='conteiner-principal'>

      <Header />

      <main className='conteiner-flexivel'>

        <Routes>
          <Route path="/" element={<Inicial />}/>
          <Route path="/interface" element={<Interface />}/>
          <Route path="/categorias" element={<Categorias />}/>
          <Route path="/perfil" element={<Perfil />}/>
          <Route path="/professores" element={<Professores />}/>
          <Route path="*" element={<h1>404 - Página Não Encontrada</h1>} />
        </Routes>

      </main>

       <Footer />

    </div>

    </BrowserRouter>
  )
}

export default App