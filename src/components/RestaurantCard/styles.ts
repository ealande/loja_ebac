import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  background-color: #ffffff;
  position: relative;
  border-style: solid;
  border-width: 1px;
  justify-content: space-between;
  width: 472px;
  height: 398px;

  ${TagContainer} {
    margin-right: 8px;
    positon: absolute;
  }
`
export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 18px;
  display: flex;
  margin-top: 16px;
  margin-bottom: 8px;
  margin-left: 8px;
  justify-content: space-between;
`

export const SaibaMaisButton = styled.div`
  background-color: ${cores.pinkColor};
  color: ${cores.backgroundColor};
  margin-left: 5px;
  margin-top: 5px;
  font-size: 14px;
  width: 82px;
  height: 24px;
  padding: 4px 6px;
  text-align: center;
`
export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin-top: 16px;
  margin-left: 8px;
  margin-right: 8px;
  text-align: justify;
`
export const Grades = styled.h3`
  display: flex;
  align-content: center;
  font-size: 18px;

  img {
    margin-left: 5px;
    width: 21px;
    height: 21px;
  }
`
