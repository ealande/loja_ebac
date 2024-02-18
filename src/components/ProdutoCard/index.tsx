import { useState, useContext } from 'react'
import { Card, Descricao, Titulo, AdicionarCarrinhoButton } from './styles'
import Modal from '../Modal/index'
import fechar from '../../assets/images/x.png'
import { ShoppingCartContext } from '../../context/ShoppingCartContext'
import { RestaurantType } from '../../pages/Home'

type Props = { cardapio: RestaurantType[] }

const ProdutoCard = ({ cardapio }: Props) => {
  const [isModalOpen, setModalOpen] = useState(false)
  const [produtoSelecionado, setProdutoSelecionado] =
    useState<RestaurantType | null>(null)
  const { increaseCartQuantity, openCart } = useContext(ShoppingCartContext)

  const handleOpenModal = (produto: RestaurantType) => {
    setProdutoSelecionado(produto)
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
          <AdicionarCarrinhoButton onClick={() => handleOpenModal(item)}>
            Adicionar ao carrinho
          </AdicionarCarrinhoButton>
        </Card>
      ))}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        {produtoSelecionado && (
          <div>
            <img
              src={fechar}
              onClick={handleCloseModal}
              alt="Fechar"
              className="fechar"
            />
            <div className="modalContainer">
              <img
                src={produtoSelecionado.foto}
                alt={produtoSelecionado.descricao}
                className="fotoCardapio"
              />
              <div className="textContainer">
                <h2 className="nome">{produtoSelecionado.nome}</h2>
                <p className="descricao">{produtoSelecionado.descricao}</p>
                <p className="porcao">Serve:{produtoSelecionado.porcao}</p>
                <button
                  onClick={() => {
                    openCart()
                    increaseCartQuantity(produtoSelecionado.id)
                    handleCloseModal()
                  }}
                  className="adicionar"
                >
                  Adicionar ao carrinho - R$ {produtoSelecionado.preco}
                </button>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </>
  )
}

export default ProdutoCard
