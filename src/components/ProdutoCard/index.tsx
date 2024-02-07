import { useState, useContext } from 'react'
import { Card, Descricao, Titulo, AdicionarCarrinhoButton } from './styles'
import Modal from '../Modal/index'
import fechar from '../../assets/images/x.png'
import { ShoppingCartContext } from '../../context/ShoppingCartContext'
import { RestaurantType } from '../../pages/Home'

type Props = {
  cardapio: RestaurantType['cardapio'][0]
}

const ProdutoCard = ({ cardapio }: Props) => {
  const [isModalOpen, setModalOpen] = useState(false)
  const { increaseCartQuantity, openCart } = useContext(ShoppingCartContext)

  const handleOpenModal = () => {
    setModalOpen(true)
  }

  const handleCloseModal = () => {
    setModalOpen(false)
  }

  return (
    <Card>
      <img src={cardapio.foto} alt={cardapio.nome} />
      <Titulo>{cardapio.nome}</Titulo>
      <Descricao>{cardapio.descricao}</Descricao>
      <AdicionarCarrinhoButton onClick={handleOpenModal}>
        Adicionar ao carrinho
      </AdicionarCarrinhoButton>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <img
          src={fechar}
          onClick={handleCloseModal}
          alt="Fechar"
          className="fechar"
        />
        <img src={cardapio.foto} alt={cardapio.nome} />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            marginLeft: '20px'
          }}
        >
          <h2 className="nome">{cardapio.nome}</h2>
          <p className="descricao">{cardapio.descricao}</p>
          <button
            onClick={() => {
              openCart()
              increaseCartQuantity(cardapio.id)
              handleCloseModal()
            }}
            className="adicionar"
          >
            Adicionar ao carrinho - R$ {cardapio.preco}
          </button>
        </div>
      </Modal>
    </Card>
  )
}

export default ProdutoCard
