import { useParams } from 'react-router'
import ProfileHeader from '../../components/HeaderProdutos'
import Banner from '../../components/RestBanner'
import ProdutoList from '../../containers/ProdutoList'

import { useGetCurrentRestQuery } from '../../services/api'

const ProdutosPage = () => {
  const { id } = useParams()
  const { data: currentRest } = useGetCurrentRestQuery(id!)

  if (currentRest) {
    return (
      <>
        <ProfileHeader></ProfileHeader>
        <Banner
          capa={currentRest.capa}
          tipo={currentRest.tipo}
          titulo={currentRest.titulo}
        ></Banner>
        <ProdutoList />
      </>
    )
  }

  return <h3>Carregando...</h3>
}

export default ProdutosPage
