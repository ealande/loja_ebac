import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Produtos from './pages/Produtos/index'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/produtos" element={<Produtos />} />
  </Routes>
)

export default Rotas
