import RestaurantCard from '../../components/RestaurantCard'
import { Container, List } from './styles'
import Restaurant from '../../models/Restaurant'

export type Props = {
  restaurant: Restaurant[]
}
const RestaurantList = ({ restaurant }: Props) => (
  <Container className="container">
    <List>
      {restaurant.map((restaurant) => (
        <li key={restaurant.id}>
          <RestaurantCard
            name={restaurant.name}
            category={restaurant.category}
            description={restaurant.description}
            image={restaurant.image}
            grade={restaurant.grade}
          />
        </li>
      ))}
    </List>
  </Container>
)

export default RestaurantList
