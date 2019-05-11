import React from 'react'
import { mount } from 'enzyme'
import MockRouter from 'react-mock-router'
import createStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import Login from '../../pages/login'
import { STATE_NO_DOCTOR } from '../../__mocks__/states'

import { Creators as AuthActions } from '../../store/ducks/auth'

const mockStore = createStore()

const storeNoDoctor = mockStore(STATE_NO_DOCTOR)

const push = jest.fn()

describe('Login', () => {
  it('should be able to mount component', () => {
    const wrapper = mount(
      <Provider store={storeNoDoctor}>
        <MockRouter push={push}>
          <Login />
        </MockRouter>
      </Provider>,
    )
    const wrapperInside = wrapper.find('Login')

    expect(wrapperInside.find('input[type="checkbox"][name="isDoctor"]').exists()).toBeTruthy()
    expect(wrapperInside.find('input[name="username"]').exists()).toBeTruthy()
    expect(wrapperInside.find('button').exists()).toBeTruthy()
  })

  it('should be able to authenticate', () => {
    const wrapper = mount(
      <Provider store={storeNoDoctor}>
        <MockRouter push={push}>
          <Login />
        </MockRouter>
      </Provider>,
    )
    const wrapperInside = wrapper.find('Login')
    wrapperInside.setState({ username: 'plinioaltoe' })
    wrapperInside.find('button').simulate('submit')
    expect(storeNoDoctor.getActions()).toContainEqual(
      AuthActions.authRequest({
        username: 'plinioaltoe',
        isDoctor: false,
      }),
    )
  })
})
