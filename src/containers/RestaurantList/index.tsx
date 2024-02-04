import RestaurantCard from '../../components/RestaurantCard'
import { Container, List } from './styles'
import Restaurant from '../../models/Restaurant'
import { RestaurantType } from '../../pages/Home'

type Props = {
  restaurants: RestaurantType[]
}

const RestaurantList = ({ restaurants }: Props) => (
  <List>
    {restaurants.map((restaurant) => (
      <RestaurantCard
        key={restaurant.id}
        id={restaurant.id}
        name={restaurant.titulo}
        category={restaurant.tipo}
        title={restaurant.titulo}
        highlighted={restaurant.destacado}
        kind={restaurant.tipo}
        score={restaurant.avaliacao}
        description={restaurant.descricao}
        photo={restaurant.capa}
        image={restaurant.capa}
        grade={restaurant.avaliacao}
      />
    ))}
  </List>
)

export default RestaurantList
