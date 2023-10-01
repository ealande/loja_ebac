import { Container, RedesSociais } from './styles'
import { Logo } from '../header/styles'
import logoImg from '../../assets/images/logo.png'
import redesImg from '../../assets/images/redes sociais.png'

const Footer = () => (
  <Container>
    <Logo src={logoImg} />
    <RedesSociais src={redesImg} />
    <p>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.
    </p>
  </Container>
)

export default Footer
