import {
  Imagem,
  BannerRestaurante,
  Logo,
  RestaurantName,
  RestaurantCategory,
  ImagemBanner,
  HeaderContainer,
  CartButton,
  RestaurantesLink
} from './styles'
import logoImg from '../../assets/images/logo.png'
import bannerImg from '../../assets/images/Vector.png'
import bannerRestaurante from '../../assets/images/image 2.png'
import { useState } from 'react'

const HeaderProdutos = () => {
  const [isCartOpen, setCartOpen] = useState(false)
  const [items, setItems] = useState([])

  const OpenCart = () => {
    setCartOpen(true)
  }
  return (
    <>
      <Imagem style={{ backgroundImage: `url(${bannerImg})` }}>
        <RestaurantesLink href="/">Restaurantes</RestaurantesLink>
        <Logo src={logoImg} />
        <CartButton onClick={OpenCart}>
          {items.length} produto(s) no carrinho
        </CartButton>
      </Imagem>
      <BannerRestaurante>
        <ImagemBanner>
          <img src={bannerRestaurante} />
        </ImagemBanner>
        <RestaurantName>La Dolce Vita Trattoria</RestaurantName>
        <RestaurantCategory>Italiana</RestaurantCategory>
      </BannerRestaurante>
    </>
  )
}

export default HeaderProdutos
