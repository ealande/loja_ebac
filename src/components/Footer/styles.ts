import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.footer`
  background-color: ${cores.footerBackground};
  height: 250px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;

  p {
    font-size: 10px;
    text-align: center;
    color: ${cores.pinkColor};
  }
`

export const RedesSociais = styled.img`
  margin-bottom: 50px;
  width: 88px;
  height: 24px;
`
