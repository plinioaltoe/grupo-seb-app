import React from 'react'
import { shallow } from 'enzyme'
import MockRouter from 'react-mock-router'
import Header from '../../components/Header'

const push = jest.fn()

describe('Header', () => {
  it('should be able to mount component', () => {
    const wrapper = shallow(
      <MockRouter push={push}>
        <Header />
      </MockRouter>,
    )
    const wrapperInside = wrapper.dive()
    expect(wrapperInside.find('#link-logout').length).toBe(1)
    expect(wrapperInside.find('#counter').length).toBe(1)
  })
})
