import styled from 'styled-components'
import { cores } from '../../styles'

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;

  &::before{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
`

export const ModalContent = styled.div`
  width: 1024px;
  height: 344px;
  color: #ffffff;
  background-color: ${cores.pinkColor};
  position: absolute;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  .fechar {
    width: 16px;
    height: 16px;
    position: absolute;
    top: 2%;
    right: 1%;
    cursor: pointer;
    display: unset;
  }

  img {
    width: 280px;
    height: 280px;
    object-fit: cover;
  }

  .adicionar {
    text-decoration: none;
    background-color: ${cores.backgroundColor};
    color: ${cores.pinkColor};
    font-size: 14px;
    font-weight: 700;
    width: 218px;
    height: 24px;
    cursor: pointer;
    border: none;
    margin-top: 100px;
  }
  .nome {
    font-weight: 900;
    font-size: 18px;
  }
  .descricao {
    font-size: 14px;
    font-weight: 400;
    text-align: justify;
    margin-top: 60px;
    margin-right: 40px;
  }
`
