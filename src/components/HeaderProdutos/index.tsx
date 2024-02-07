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
import { useContext, useEffect, useState } from 'react'
import { ShoppingCartContext } from '../../context/ShoppingCartContext'
import { useParams } from 'react-router-dom'

const HeaderProdutos = () => {
  const { id } = useParams()
  const { openCart, cartQuantity } = useContext(ShoppingCartContext)
  const [restaurantData, setRestaurantData] = useState({
    name: '',
    category: '',
    capa: ''
  })

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setRestaurantData({
          name: data.titulo,
          category: data.tipo,
          capa: data.capa
        })
      })
  }, [id])

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
          <img src={restaurantData.capa} alt="Capa do restaurante" />
        </ImagemBanner>
        <RestaurantName>{restaurantData.name}</RestaurantName>
        <RestaurantCategory>{restaurantData.category}</RestaurantCategory>
      </BannerRestaurante>
    </>
  )
}

export default HeaderProdutos
