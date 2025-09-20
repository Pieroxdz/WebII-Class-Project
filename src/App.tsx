import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainFooter from './common/MainFooter'
import MainHeader from './common/MainHeader'
import Inicio from './pages/Inicio'
import Proveedores from './pages/Proveedores'
import Inversiones from './pages/Inversiones'
import Configuracion from './pages/Configuracion'
import Perfil from './pages/Perfil'


function App() {

  return (
    <>
      <BrowserRouter>
        <MainHeader />

        <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path='/proveedores' element={<Proveedores />} />
          <Route path='/inversiones' element={<Inversiones />} />
          <Route path='/perfil' element={<Perfil />} />
          <Route path='/configuracion' element={<Configuracion />} />
        </Routes>

        <MainFooter />
      </BrowserRouter>
    </>
  )
}

export default App
