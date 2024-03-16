import { Tag } from '../Tag'
import {
  TagDestaque,
  Card,
  Descricao,
  Titulo,
  SaibaMaisButton,
  Grades
} from './styles'
import starImage from '../../assets/images/estrela.png'

export interface MenuItem {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

export type DadosRestaurante = {
  id: number
  titulo: string
  destacado?: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio?: MenuItem[]
}

export const getDescription = (descricao: string) => {
  if (descricao.length > 120) {
    return descricao.slice(0, 127) + '...'
  }

  return descricao
}

const RestaurantCard = ({
  titulo,
  tipo,
  descricao,
  avaliacao,
  capa,
  id
}: DadosRestaurante) => (
  <Card>
    <img src={capa} alt="foto" />
    <Titulo>
      {titulo}
      <Grades>
        {avaliacao}
        <img src={starImage} alt="star" />
      </Grades>
    </Titulo>
    <Tag>{tipo}</Tag>
    <TagDestaque isVisible={avaliacao > 4.8}>Destaque da Semana</TagDestaque>
    <Descricao>{descricao}</Descricao>
    <SaibaMaisButton href={`/produtos/${id}`}>Saiba Mais</SaibaMaisButton>
  </Card>
)

export default RestaurantCard
