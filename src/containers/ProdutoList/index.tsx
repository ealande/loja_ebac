import ProdutoCard from '../../components/ProdutoCard'
import { Container, List } from './styles'
import { RestaurantType } from '../../pages/Home'

type Props = {
  produtos: RestaurantType[]
}

const ProdutoList = ({ produtos }: Props) => (
  <Container>
    <div className="container">
      <List>
        {produtos.map((produto) => (
          <ProdutoCard key={produto.id} cardapio={produto.cardapio} />
        ))}
      </List>
    </div>
  </Container>
)

export default ProdutoList
