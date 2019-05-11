import styled from 'styled-components'

import { colors, metrics } from '../../styles'

export const Container = styled.div`
  margin-top: ${metrics.baseMargin}px;
  display: flex;
  flex-direction: column;
  max-width: 550px;
  width: 100%;
  background: ${colors.white};
  border-radius: ${metrics.baseRadius}px;
  padding: ${metrics.basePadding * 3}px ${metrics.basePadding * 2}px;
  box-shadow: 0 0 20px ${colors.darkTransparent};

  strong {
    display: block;
    text-align: center;
    font-size: 21px;
    color: ${colors.dark};
    margin-bottom: ${metrics.baseMargin}px;
  }

  p {
    font-size: 14px;
    color: ${colors.regular};
    margin-bottom: ${metrics.baseMargin}px;
    text-align: center;
  }
`
export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;

  li {
    padding: ${metrics.basePadding}px ${metrics.basePadding}px;
    border: 1px solid ${colors.light};
    border-radius: ${metrics.baseRadius}px;
    margin-bottom: ${metrics.baseMargin}px;
    display: flex;
    align-items: center;
    justify-content: space-around;

    button {
      border: 0;
      color: red;
      font-size: medium;
      background: #fff;
      cursor: pointer;
    }
  }
`

export const User = styled.div`
   {
    display: flex;
    align-items: center;
    img {
      width: 48px;
      height: 48px;
      border-radius: 50%;
    }
    strong {
      color: ${colors.dark};
      font-size: 12px;
      margin-bottom: 0px;
      margin-left: ${metrics.baseMargin}px;
    }
  }
`

export const Appointment = styled.div`
  strong {
    color: ${colors.dark};
    font-size: 12px;
    margin-bottom: 0px;
  }

  label {
    color: ${colors.regular};
    font-size: 12px;
  }
`

export const Form = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  input {
    background-color: ${colors.white};
    border-radius: ${metrics.baseRadius}px;
    width: 300px;
    height: 30px;
    border: 1px solid ${colors.light};
    margin: 0 0 ${metrics.basePadding * 2}px 0;
    padding-left: ${metrics.basePadding}px;
    font-size: 12px;
    text-align: left;

    ::placeholder {
      padding-left: ${metrics.basePadding}px;
      opacity: 0.5;
    }
  }

  button {
    border-radius: ${metrics.baseRadius}px;
    height: 40px;
    width: 300px;
    background: ${colors.success};
    border: 0;
    color: ${colors.white};
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    :hover {
      opacity: 0.9;
    }
  }
`

export const Flat = styled.div``

export const Button = styled.button``
