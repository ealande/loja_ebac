import ProdutoList from '../../containers/ProdutoList'
import HeaderProdutos from '../../components/HeaderProdutos'
import { useEffect, useState } from 'react'
import { RestaurantType } from '../Home'

const ProdutosPage = () => {
  const [produtos, setProdutos] = useState<RestaurantType[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((data) => {
        console.log('API Response:', data)
        setProdutos(data)
      })
      .catch((error) => console.error('Error:', error))
  }, [])

  return (
    <>
      <HeaderProdutos />
      <ProdutoList produtos={produtos} />
    </>
  )
}

export default ProdutosPage
