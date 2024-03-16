import Header from '../../components/header'
import { useGetRestaurantsQuery } from '../../services/api'
import RestaurantList from '../../containers/RestaurantList'

const Home = () => {
  const { data: restaurante, isLoading } = useGetRestaurantsQuery()

  if (restaurante) {
    return (
      <>
        <Header></Header>
        <RestaurantList restaurants={restaurante}></RestaurantList>
      </>
    )
  }

  return <h3>CARREGANDO...</h3>
}

export default Home
