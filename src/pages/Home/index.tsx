import RestaurantList from '../../containers/RestaurantList'
import Restaurant from '../../models/Restaurant'
import sushi from '../../assets/images/imagem.png'
import dolce from '../../assets/images/image 1.png'
import Header from '../../components/header'
import { useEffect, useState } from 'react'

export type RestaurantType = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
}
const Home = () => {
  const [restaurantes, setRestaurantes] = useState<RestaurantType[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurantes(res))
  }, [])

  return (
    <>
      <Header />
      <RestaurantList restaurants={restaurantes} />
    </>
  )
}

export default Home
