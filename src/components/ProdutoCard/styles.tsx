import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  background-color: ${cores.pinkColor};
  position: relative;
  border-style: solid;
  border-width: 1px;
  width: 320px;
  height: 338px;

  img{
  width: 304px;
  height: 167px;
  margin-left: 8px;  margin-top: 16px;

  margin-top: 8px;
  margin-right: 8px;
  }
  }
`
export const Titulo = styled.h3`
  font-weight: 900;
  font-size: 16px;
  display: flex;
  margin-bottom: 8px;
  margin-left: 8px;
  justify-content: space-between;
  color: ${cores.backgroundColor};
`

export const AdicionarCarrinhoButton = styled.a`
  display: flex;
  text-align: center;
  text-decoration: none;
  justify-content: center;
  align-items: center;
  background-color: ${cores.backgroundColor};
  color: ${cores.pinkColor};
  font-size: 14px;
  font-weight: 700;
  height: 24px;
  margin-left: 8px;
  margin-right: 8px;
  margin-bottom: 8px;
  cursor: pointer;
`
export const Descricao = styled.p`
  font-size: 14px;
  font-weight: 400px;
  line-height: 22px;
  display: block;
  margin-left: 8px;
  margin-right: 8px;
  margin-bottom: 8px;
  text-align: justify;
  color: ${cores.backgroundColor};
`
