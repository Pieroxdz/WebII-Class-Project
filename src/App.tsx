import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainFooter from './common/MainFooter'
import MainHeader from './common/MainHeader'
import Inicio from './pages/Inicio'
import Proveedores from './pages/Proveedores'
import Inversiones from './pages/Inversiones'
import Configuracion from './pages/Configuracion'
import Perfil from './pages/Perfil'
import Empleados from './pages/Empleados'
import Tienda from './pages/Tienda'
import Pagina404 from './pages/Pagina404'
import ProductoDetalles from './pages/ProductoDetalles'
import Carrito from './pages/Carrito'
import Clientes from './pages/Clientes'


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
          <Route path='/empleados' element={<Empleados />} />
          <Route path='/tienda' element={<Tienda />} />
          <Route path='/productodetalle/:idproducto' element={<ProductoDetalles />} />
          <Route path='/clientes' element={<Clientes />} />
          <Route path='/carrito' element={<Carrito />} />
          <Route path='*' element={<Pagina404 />} />
        </Routes>

        <MainFooter />
      </BrowserRouter>
    </>
  )
}

export default App
