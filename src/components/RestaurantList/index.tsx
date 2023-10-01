import RestaurantCard from '../RestaurantCard'
import { Container, List } from './styles'
import Restaurant from '../../models/Restaurant'

export type Props = {
  restaurant: Restaurant[]
}
const RestaurantList = ({ restaurant }: Props) => (
  <Container>
    <div className="container">
      <List>
        {restaurant.map((restaurant) => (
          <RestaurantCard
            key={restaurant.id}
            name={restaurant.name}
            category={restaurant.category}
            description={restaurant.description}
            image={restaurant.image}
            grade={restaurant.grade}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default RestaurantList
