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

  p {
    margin-bottom: ${metrics.baseMargin}px;
  }
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
    justify-content: flex-start;
    width: 200px;
    font-size: 10px;
    opacity: 0.5;
  }

  input[type='checkbox'] {
    height: 20px;
    margin-right: ${metrics.baseMargin / 3}px;
    background-color: ${colors.lighter};
  }

  input[type='text'] {
    padding: ${metrics.basePadding / 2}px 0 ${metrics.basePadding / 2}px 0;
    width: 200px;
    opacity: 0.8;
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
