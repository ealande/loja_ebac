import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.section`
  padding: 100px;
  background-color: ${cores.backgroundColor};
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 50px;
  margin-left: 250px;
  margin-right: 250px;
  justify-items: center;
  justify-content: space-between;
  img {
    width: 100%;
  }
`
export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
`
