import styled from 'styled-components'
import { cores } from '../../styles'

export const Imagem = styled.header`
  width: 100%;
  height: 186px;
  background-repeat: no-repeat;
  background-size: cover;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}
`
export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Logo = styled.img`
  width: 124px;
  height: 56px;
`

export const RestaurantCategory = styled.h3`
  position: absolute;
  top: 10%;
  left: 5%;
  font-weight: 100;
  font-size: 32px;
  color: #ffffff;
`
export const RestaurantName = styled.h2`
  position: absolute;
  bottom: 10%;
  left: 5%;
  font-weight: 900;
  font-size: 32px;
  color: #ffffff;
`
export const BannerRestaurante = styled.div`
  position: relative;
  width: 100%;
  height: 280px;
`
export const ImagemBanner = styled.div`
  position: absolute;
  width: 100%;
  height: 280px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  &::before{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);

`
export const CartButton = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
  font-weight: 900;
  font-size: 18px;
  line-height: 21px;
  color: ${cores.pinkColor};
`
export const RestaurantesLink = styled.a`
  cursor: pointer;
  background-color: transparent;
  border: none;
  font-weight: 900;
  font-size: 18px;
  line-height: 21px;
  color: ${cores.pinkColor};
  text-decoration: none;
`
