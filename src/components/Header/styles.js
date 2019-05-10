import styled from 'styled-components'

import { colors, metrics } from '../../styles'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${metrics.basePadding * 2}px ${metrics.basePadding * 3}px ${metrics.basePadding * 2}px
    ${metrics.basePadding * 3}px;
  margin-bottom: ${metrics.baseMargin * 2}px;
  background: ${colors.success};

  div#img {
    width: 16px;
  }
  a {
    height: 16px;
    img {
      font-size: 16px;
    }
  }
`

export const Content = styled.div``

export const Menu = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  a {
    font-weight: bold;
    font-size: 12px;
    color: ${colors.white};
    padding-left: ${metrics.basePadding * 3}px;
    text-decoration: none;
    :hover {
      color: ${colors.white};
      text-shadow: 0px 0px 5px ${colors.white};
    }
  }
`
