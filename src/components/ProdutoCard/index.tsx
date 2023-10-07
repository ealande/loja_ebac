import { useState } from 'react'
import { Card, Descricao, Titulo, AdicionarCarrinhoButton } from './styles'
import Modal from '../Modal/index'
import fechar from '../../assets/images/x.png'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../context/ShoppingCartContext'

export type Props = {
  id: number
  name?: string
  description?: string
  image?: string
}

const ProdutoCard = ({ id, name, description, image }: Props) => {
  const [isModalOpen, setModalOpen] = useState(false)

  const handleOpenModal = () => {
    setModalOpen(true)
  }

  const handleCloseModal = () => {
    setModalOpen(false)
  }

  const {
    increaseCartQuantity,
    removeFromCart,
    openCart,
    closeCart,
    cartItems,
    cartQuantity
  } = useContext(ShoppingCartContext)

  return (
    <Card>
      <img src={image} alt={name} />
      <Titulo>{name}</Titulo>
      <Descricao>{description}</Descricao>
      <AdicionarCarrinhoButton onClick={handleOpenModal}>
        Adicionar ao carrinho
      </AdicionarCarrinhoButton>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <img
          src={fechar}
          onClick={handleCloseModal}
          alt="Fechar"
          className="fechar"
        ></img>
        <h2 className="nome">{name}</h2>
        <p className="descricao">{description}</p>
        <img src={image} alt={name} />
        <button
          onClick={() => {
            openCart()
            increaseCartQuantity(id)
            handleCloseModal()
          }}
          className="adicionar"
        >
          Adicionar ao carrinho - R$ 60,90
        </button>
      </Modal>
    </Card>
  )
}

export default ProdutoCard
