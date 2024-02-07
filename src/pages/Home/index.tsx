import RestaurantList from '../../containers/RestaurantList'
import Header from '../../components/header'
import { useEffect, useState } from 'react'

export type RestaurantType = {
  id: number
  titulo: string
  avaliacao: number
  capa: string
  tipo: string
  cardapio: {
    foto: string
    nome: string
    descricao: string
    preco: number
  }[]
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
