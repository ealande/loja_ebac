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
import { produtos } from '../../pages/Produtos/index'
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

  const totalFinal = cartItems.reduce((total, cartItem) => {
    const productItem = produtos.find((i) => i.id === cartItem.id)
    return total + (productItem?.price || 0)
  }, 0)

  return (
    <CartContainer isOpen={isOpen}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <div>
          <Title>Carrinho</Title>
        </div>
        <ul>
          {cartItems.map((item) => {
            const productItem = produtos.find((i) => i.id === item.id)
            return (
              <CartItem key={item.id}>
                <img src={productItem?.image} alt={productItem?.name} />
                <div>
                  <h3>{productItem?.name}</h3>
                  <span>{formatCurrency(productItem?.price)}</span>
                </div>
                <button onClick={() => removeFromCart(item.id)} />
              </CartItem>
            )
          })}
        </ul>
        <Prices>Total {formatCurrency(totalFinal)}</Prices>
        <Button>Continuar com a entrega</Button>
      </Sidebar>
    </CartContainer>
  )
}
