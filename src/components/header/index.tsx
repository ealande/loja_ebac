import { Imagem, Titulo, Logo } from './styles'
import logoImg from '../../assets/images/logo.png'
import bannerImg from '../../assets/images/Vector.png'

const Header = () => (
  <Imagem style={{ backgroundImage: `url(${bannerImg})` }}>
    <Logo src={logoImg} />
    <Titulo>Viva experiências gastronômicas no conforto da sua casa</Titulo>
  </Imagem>
)

export default Header
