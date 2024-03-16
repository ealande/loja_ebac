import RestaurantCard, {
  DadosRestaurante
} from '../../components/RestaurantCard'
import { Container, List } from './styles'

type Props = {
  restaurants: DadosRestaurante[]
}

const RestaurantList = ({ restaurants }: Props) => (
  <List>
    {restaurants.map((restaurant) => (
      <li key={restaurant.id}>
        <RestaurantCard
          id={restaurant.id}
          titulo={restaurant.titulo}
          tipo={restaurant.tipo}
          descricao={restaurant.descricao}
          avaliacao={restaurant.avaliacao}
          capa={restaurant.capa}
        />
      </li>
    ))}
  </List>
)

export default RestaurantList
