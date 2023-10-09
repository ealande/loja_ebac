import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.section`
  padding: 100px;
  background-color: ${cores.backgroundColor};
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  row-gap: 50px;
  justify-items: center;
  justify-content: space-between;

  @media (max-width: 1030px) {
    grid-template-columns: 1fr;
  }
`
