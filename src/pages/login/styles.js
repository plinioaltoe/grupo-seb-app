import styled from 'styled-components'

import { colors, metrics } from '../../styles'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 270px;
  height: 200px;
  background: ${colors.white};
  margin-top: ${metrics.baseMargin * 15}px;
  border-radius: ${metrics.baseRadius}px;
`

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  p {
    color: ${colors.danger};
    margin-bottom: ${metrics.baseMargin}px;

    text-align: center;
  }

  label {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: ${metrics.baseMargin}px;
  }

  input[type='checkbox'] {
    height: 20px;
    width: 20px;
    background-color: ${colors.lighter};
    margin-right: ${metrics.baseMargin / 2}px;
  }

  input[type='text'] {
    padding: ${metrics.basePadding / 2}px 0 ${metrics.basePadding / 2}px 0;
    width: 200px;
    opacity: 0.6;
    font-size: 16px;
  }

  button {
    background: ${colors.success};
    height: 32px;
    border-radius: ${metrics.baseRadius * 3}px;
    color: ${colors.white};
    line-height: 32px;
    padding: 0 35px;
    border: 0;
    margin-top: ${metrics.baseMargin}px;
    font-size: 12px;
    width: 200px;
    cursor: pointer;
  }
`
