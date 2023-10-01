import { cores } from '../../styles'
import styled from 'styled-components'

import { Props } from '.'

export const TagContainer = styled.div<Props>`
  width: 60px;
  height: 26px;
  background-color: ${cores.pinkColor};
  color: ${cores.backgroundColor};
  font-size: 12px;
  font-weight: bold;
  padding-top: 5px;
  display: inline-block;
  position: absolute;
  top: 10px;
  right: 10px;
  text-align: center;
`
