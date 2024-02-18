import { ShoppingCartContext } from '../../context/ShoppingCartContext'
import {
  Button,
  CartContainer,
  CartItem,
  Overlay,
  Prices,
  Sidebar,
  Title
} from './styles'
import ProdutosPage from '../../pages/Produtos/index'
import { useContext } from 'react'

type ShoppingCartProps = {
  isOpen: boolean
}

export const formatCurrency = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

export function ShoppingCart({ isOpen }: ShoppingCartProps) {
  const { removeFromCart, closeCart, cartItems } =
    useContext(ShoppingCartContext)

  return (
    <CartContainer isOpen={isOpen}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <div>
          <Title>Carrinho</Title>
        </div>
        <ul></ul>
        <Prices>Total</Prices>
        <Button>Continuar com a entrega</Button>
      </Sidebar>
    </CartContainer>
  )
}

export default ShoppingCart
