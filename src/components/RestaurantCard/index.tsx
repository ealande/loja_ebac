import Tag from '../Tag'
import { Card, Descricao, Titulo, SaibaMaisButton, Grades } from './styles'
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
    <Descricao>{description}</Descricao>
    <SaibaMaisButton>Saiba Mais</SaibaMaisButton>
  </Card>
)

export default RestaurantCard
