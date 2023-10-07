import ProdutoList from '../../containers/ProdutoList'
import Produtos from '../../models/Produto'
import pizza from '../../assets/images/image 3.svg'
import HeaderProdutos from '../../components/HeaderProdutos'

export const produtos: Produtos[] = [
  {
    id: 1,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    name: 'Pizza Marguerita',
    image: pizza,
    price: 60.9,
    quantity: 1
  },
  {
    id: 2,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    name: 'Pizza Marguerita',
    image: pizza,
    price: 60.9,
    quantity: 1
  },
  {
    id: 3,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    name: 'Pizza Marguerita',
    image: pizza,
    price: 60.9,
    quantity: 1
  },
  {
    id: 4,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    name: 'Pizza Marguerita',
    image: pizza,
    price: 60.9,
    quantity: 1
  },
  {
    id: 5,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    name: 'Pizza Marguerita',
    image: pizza,
    price: 60.9,
    quantity: 1
  },
  {
    id: 6,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    name: 'Pizza Marguerita',
    image: pizza,
    price: 60.9,
    quantity: 1
  }
]

const ProdutosPage = () => (
  <>
    <HeaderProdutos />
    <ProdutoList produto={produtos} />
  </>
)

export default ProdutosPage
