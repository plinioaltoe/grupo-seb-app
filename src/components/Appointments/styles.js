import styled from 'styled-components'

import { colors, metrics } from '../../styles'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 400px;
  height: 400px;
  background: ${colors.white};
  margin-top: ${metrics.baseMargin * 3}px;
  border-radius: ${metrics.baseRadius}px;
`
