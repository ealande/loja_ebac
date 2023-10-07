import {
  Imagem,
  BannerRestaurante,
  Logo,
  RestaurantName,
  RestaurantCategory,
  ImagemBanner,
  CartButton,
  RestaurantesLink
} from './styles'
import logoImg from '../../assets/images/logo.png'
import bannerImg from '../../assets/images/Vector.png'
import bannerRestaurante from '../../assets/images/image 2.png'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../context/ShoppingCartContext'

const HeaderProdutos = () => {
  const { openCart, cartQuantity } = useContext(ShoppingCartContext)

  return (
    <>
      <Imagem style={{ backgroundImage: `url(${bannerImg})` }}>
        <RestaurantesLink href="/">Restaurantes</RestaurantesLink>
        <Logo src={logoImg} />
        <CartButton onClick={openCart}>
          {cartQuantity} produto(s) no carrinho
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
