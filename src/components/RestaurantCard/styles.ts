import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

type TagDestaqueProps = {
  isVisible?: boolean
}

export const Card = styled.div`
  background-color: #ffffff;
  position: relative;
  border-style: solid;
  border-width: 1px;
  max-width: 480px;
  width: 100%;

  > img {
    width: 100%;
    height: 240px;
    max-height: 100%;
  }
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

export const SaibaMaisButton = styled.a`
  background-color: ${cores.pinkColor};
  color: ${cores.backgroundColor};
  margin-left: 5px;
  font-size: 14px;
  width: 82px;
  height: 24px;
  padding: 4px 6px;
  text-align: center;
  text-decoration: none;
`
export const Descricao = styled.p`
  color: ${cores.pinkColor};
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin-top: 16px;
  margin-left: 8px;
  margin-right: 8px;
  margin-bottom: 8px;
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
export const TagDestaque = styled.div<TagDestaqueProps>`
  width: 121px;
  height: 26px;
  background-color: ${cores.pinkColor};
  color: ${cores.backgroundColor};
  font-size: 12px;
  font-weight: bold;
  padding-top: 5px;
  display: inline-block;
  position: absolute;
  top: 10px;
  right: 88px;
  text-align: center;
  visibility: ${(props) => (props.isVisible ? 'visible' : 'hidden')};
`
