import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.section`
  background-color: ${cores.backgroundColor};
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  margin-top: 80px;
  margin-bottom: 120px;
  row-gap: 50px;

  @media (max-width: 1030px) {
    grid-template-columns: 1fr;
  }
`
export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
`
