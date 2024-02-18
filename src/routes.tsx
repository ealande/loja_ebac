import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ProdutosPage from './pages/Produtos/index'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/produtos/:id" element={<ProdutosPage />} />
  </Routes>
)

export default Rotas
