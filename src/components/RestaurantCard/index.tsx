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

type Props = {
  name: string
  category: string
  description: string
  image: string
  grade: number
}

const RestaurantCard = ({
  name,
  category,
  description,
  image,
  grade
}: Props) => (
  <Card>
    <img src={image} alt={name} />
    <Titulo>
      {name}
      <Grades>
        {grade}
        <img src={starImage} alt="star" />
      </Grades>
    </Titulo>
    <Tag>{category}</Tag>
    <TagDestaque isVisible={grade > 4.8}>Destaque da Semana</TagDestaque>
    <Descricao>{description}</Descricao>
    <SaibaMaisButton href="/produtos">Saiba Mais</SaibaMaisButton>
  </Card>
)

export default RestaurantCard
