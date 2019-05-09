import React from 'react'
import { mount } from 'enzyme'
import MockRouter from 'react-mock-router'
import Login from '../../pages/login'

const push = jest.fn()

describe('Login', () => {
  it('should be able to mount component', () => {
    const wrapper = mount(
      <MockRouter push={push}>
        <Login />
      </MockRouter>,
    )
    const wrapperInside = wrapper.find('Login')

    expect(wrapperInside.find('input[type="checkbox"][name="isDoctor"]').exists()).toBeTruthy()
    expect(wrapperInside.find('input[name="username"]').exists()).toBeTruthy()
    expect(wrapperInside.find('button').exists()).toBeTruthy()
  })

  // it('should be able to authenticate', () => {
  //   const wrapper = mount(
  //     <MockRouter push={push}>
  //       <Login />
  //     </MockRouter>,
  //   )
  //   const wrapperInside = wrapper.find('Login')

  //   expect(wrapperInside.find('input[name="username"]').simulate('change'), {
  //     target: value 'teste'
  //   }).

  //   expect(wrapperInside.find('input[type="checkbox"][name="isDoctor"]').exists()).toBeTruthy()
  //   expect(wrapperInside.find('input[name="username"]').exists()).toBeTruthy()
  //   expect(wrapperInside.find('button').exists()).toBeTruthy()
  // })
})
