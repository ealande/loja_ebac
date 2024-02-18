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

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
  }
`

export const ModalContent = styled.div`
  width: 1024px;
  height: 344px;
  color: #ffffff;
  background-color: ${cores.pinkColor};
  position: absolute;
  display: flex;

  .fechar {
    width: 16px;
    height: 16px;
    position: absolute;
    top: 2%;
    right: 1%;
    cursor: pointer;
    display: unset;
  }

  .modalContainer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-left: 20px;
  }

  .textContainer {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 20px;
    margin-top: 30px;
  }

  .fotoCardapio {
    width: 280px;
    height: 280px;
    object-fit: cover;
    margin-left: 10px;
    margin-top: 30px;
  }

  .descricao {
    font-size: 14px;
    font-weight: 400;
    text-align: justify;
    margin-right: 40px;
    margin-top: 10px;
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
    margin-top: 10px;
  }

  .nome {
    font-weight: 900;
    font-size: 18px;
    margin-bottom: 10px;
  }

  .porcao {
    font-size: 14px;
    font-weight: 400;
    margin-bottom: 10px;
  }
`
