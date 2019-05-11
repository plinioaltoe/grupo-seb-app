import React from 'react'
import { mount } from 'enzyme'
import MockRouter from 'react-mock-router'
import createStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import Main from '../../pages/main'
import { STATE_NO_DOCTOR } from '../../__mocks__/states'

const mockStore = createStore()

const storeNoDoctor = mockStore(STATE_NO_DOCTOR)

const push = jest.fn()

describe('Main', () => {
  it('should be able to mount component', () => {
    const wrapper = mount(
      <Provider store={storeNoDoctor}>
        <MockRouter push={push}>
          <Main />
        </MockRouter>
      </Provider>,
    )
    const wrapperInside = wrapper.find('Main')

    expect(wrapperInside.find('Header').exists()).toBeTruthy()
    expect(wrapperInside.find('Appointments').exists()).toBeTruthy()
  })
})
