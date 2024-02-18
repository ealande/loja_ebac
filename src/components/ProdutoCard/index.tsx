import { useState, useContext } from 'react'
import { Card, Descricao, Titulo, AdicionarCarrinhoButton } from './styles'
import Modal from '../Modal/index'
import fechar from '../../assets/images/x.png'
import { ShoppingCartContext } from '../../context/ShoppingCartContext'
import { RestaurantType } from '../../pages/Home'

type Props = { cardapio: RestaurantType }

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
    <>
      {cardapio.map((item, index) => (
        <Card key={index}>
          <img src={item.foto} alt={item.descricao} />
          <Titulo>{item.nome}</Titulo>
          <Descricao>{item.descricao}</Descricao>
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
            <img src={item.foto} alt={item.descricao} />
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                marginLeft: '20px'
              }}
            >
              <h2 className="nome">{item.descricao}</h2>
              <p className="descricao">{item.descricao}</p>
              <button
                onClick={() => {
                  openCart()
                  increaseCartQuantity(item.id)
                  handleCloseModal()
                }}
                className="adicionar"
              >
                Adicionar ao carrinho - R$ {item.preco}
              </button>
            </div>
          </Modal>
        </Card>
      ))}
    </>
  )
}

export default ProdutoCard
