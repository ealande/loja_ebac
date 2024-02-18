import ProdutoList from '../../containers/ProdutoList'
import HeaderProdutos from '../../components/HeaderProdutos'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ProdutosPage = () => {
  const [produtos, setProdutos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    setLoading(true)
    setError(null)

    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch data')
        }
        return res.json()
      })
      .then((res) => {
        setProdutos([res])
      })
      .catch((error) => {
        setError(error.message)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [id])

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  return (
    <>
      <HeaderProdutos />
      <ProdutoList produtos={produtos} />
    </>
  )
}

export default ProdutosPage
