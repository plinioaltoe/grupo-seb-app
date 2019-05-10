import styled from 'styled-components'

import { colors, metrics } from '../../styles'

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${metrics.basePadding * 2}px ${metrics.basePadding * 3}px ${metrics.basePadding * 2}px
    ${metrics.basePadding * 3}px;
  background: ${colors.success};
`

export const Content = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  h1 {
    font-size: 20px;
    color: ${colors.white};
    font-weight: bold;
  }

  i {
    color: white;
    width: 100px;
    text-align: center;
    vertical-align: middle;
    position: relative;
    font-size: 1.5em;
  }
  i[qtd]:after {
    content: attr(qtd);
    position: absolute;
    background: rgba(0, 0, 255, 0.85);
    height: 1.5rem;
    bottom: 0.6rem;
    right: 1.2rem;
    width: 1.5rem;
    text-align: center;
    line-height: 1.5rem;
    font-size: 0.9rem;
    border-radius: 50%;
    color: ${colors.white};
    font-family: sans-serif;
  }
`

export const Menu = styled.div`
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
