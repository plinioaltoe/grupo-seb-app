import React from 'react'
import { mount } from 'enzyme'
import MockRouter from 'react-mock-router'
import { Provider } from 'react-redux'
import createStore from 'redux-mock-store'
import Header from '../../components/Header'
import { STATE_NO_DOCTOR } from '../../__mocks__/states'

const push = jest.fn()
const mockStore = createStore()

const storeNoDoctor = mockStore(STATE_NO_DOCTOR)

describe('Header', () => {
  it('should be able to mount component', () => {
    const wrapper = mount(
      <Provider store={storeNoDoctor}>
        <MockRouter push={push}>
          <Header />
        </MockRouter>
      </Provider>,
    )
    const wrapperInside = wrapper.find('Header')
    expect(wrapperInside.find('a#logout').length).toBe(1)
    expect(wrapperInside.find('i').length).toBe(1)
  })

  it('should be able to remove token from local storage', () => {
    const spy = jest.spyOn(Storage.prototype, 'removeItem')

    const wrapper = mount(
      <Provider store={storeNoDoctor}>
        <MockRouter push={push}>
          <Header />
        </MockRouter>
      </Provider>,
    )
    const wrapperInside = wrapper.find('Header')
    wrapperInside.find('a#logout').simulate('click')
    expect(spy).toHaveBeenCalled()
  })

  it('should count only yours appointments', () => {
    const wrapper = mount(
      <Provider store={storeNoDoctor}>
        <MockRouter push={push}>
          <Header />
        </MockRouter>
      </Provider>,
    )
    const wrapperInside = wrapper.find('Header')
    expect(wrapperInside.props().appointmentsCount).toBe(2)
  })
})
