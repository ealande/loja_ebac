import ProdutoCard from '../../components/ProdutoCard'
import { Container, List } from './styles'
import { RestaurantType } from '../../pages/Home'
import { produtos } from '../../pages/Produtos/index'
type Props = {
  produtos: RestaurantType[]
}

const ProdutoList = ({ produtos }: Props) => (
  <Container>
    <div className="container">
      <List>
        {produtos.map((produto) => (
          <ProdutoCard
            key={produto.id}
            cardapio={{
              foto: '',
              nome: '',
              descricao: '',
              preco: 0
            }}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default ProdutoList
