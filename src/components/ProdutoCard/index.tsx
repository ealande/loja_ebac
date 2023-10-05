import { useState } from 'react'
import { Card, Descricao, Titulo, AdicionarCarrinhoButton } from './styles'
import Produto from '../../models/Produto'
import Modal from '../Modal/index'
import fechar from '../../assets/images/x.png'

export type Props = {
  id: number
  name: string
  description: string
  image: string
}

const RestaurantCard = ({ id, name, description, image }: Props) => {
  const [produtos, setProduto] = useState<Produto[]>([])
  const [shoppingCart, setCart] = useState<Produto[]>([])
  const [isModalOpen, setModalOpen] = useState(false)

  const handleOpenModal = () => {
    setModalOpen(true)
  }

  const handleCloseModal = () => {
    setModalOpen(false)
  }

  function adicionarAoCarrinho() {
    const novoProduto = { id, name, description, image }
    if (shoppingCart.find((item) => item.id === novoProduto.id)) {
      alert('Item já adicionado.')
    } else {
      setCart([...shoppingCart, novoProduto])
    }
  }
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
        <button onClick={adicionarAoCarrinho} className="adicionar">
          Adicionar ao carrinho - R$ 60,90
        </button>
      </Modal>
    </Card>
  )
}

export default RestaurantCard
