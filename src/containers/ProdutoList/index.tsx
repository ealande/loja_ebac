import ProdutoCard from '../../components/ProdutoCard'
import { Container, List } from './styles'
import Produto from '../../models/Produto'

export type Props = {
  produto: Produto[]
}
const ProdutoList = ({ produto }: Props) => (
  <Container>
    <div className="container">
      <List>
        {produto.map((produto) => (
          <ProdutoCard
            key={produto.id}
            id={produto.id}
            name={produto.name}
            description={produto.description}
            image={produto.image}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default ProdutoList
