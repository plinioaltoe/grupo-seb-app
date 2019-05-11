import React from 'react'
import { mount } from 'enzyme'
import MockRouter from 'react-mock-router'
import { Provider } from 'react-redux'
import createStore from 'redux-mock-store'
import Appointments from '../../components/Appointments'
import { STATE_NO_DOCTOR, STATE_DOCTOR } from '../../__mocks__/states'

import { Creators as AppointmentsActions } from '../../store/ducks/appointments'

const push = jest.fn()
const mockStore = createStore()

const storeNoDoctor = mockStore(STATE_NO_DOCTOR)
const storeDoctor = mockStore(STATE_DOCTOR)

describe('Appointments no doctor view', () => {
  it('should be able to mount component and render list and button', () => {
    const wrapper = mount(
      <Provider store={storeNoDoctor}>
        <MockRouter push={push}>
          <Appointments />
        </MockRouter>
      </Provider>,
    )
    const wrapperInside = wrapper.find('Appointments')
    expect(wrapperInside.find('ul').exists()).toBeTruthy()
    expect(wrapperInside.find('button#agendar').exists()).toBeTruthy()
  })

  it('should shown 2 appointments on list', () => {
    const wrapper = mount(
      <Provider store={storeNoDoctor}>
        <MockRouter push={push}>
          <Appointments />
        </MockRouter>
      </Provider>,
    )
    const wrapperInside = wrapper.find('Appointments')
    expect(wrapperInside.props().appointments.length).toBe(2)
    expect(wrapperInside.find('li#listItem').length).toBe(2)
  })

  it('should be able to delete appointments', () => {
    const wrapper = mount(
      <Provider store={storeNoDoctor}>
        <MockRouter push={push}>
          <Appointments />
        </MockRouter>
      </Provider>,
    )

    const wrapperInside = wrapper.find('Appointments')
    wrapperInside.find('button#delete1').simulate('click')
    expect(storeNoDoctor.getActions()).toContainEqual(AppointmentsActions.rmAppointmentsRequest(1))
  })

  // it('should be able to remove token from local storage', () => {
  //   const spy = jest.spyOn(Storage.prototype, 'removeItem')

  //   const wrapper = mount(
  //     <Provider store={storeNoDoctor}>
  //       <MockRouter push={push}>
  //         <Appointments />
  //       </MockRouter>
  //     </Provider>,
  //   )
  //   const wrapperInside = wrapper.find('Appointments')
  //   wrapperInside.find('a#logout').simulate('click')
  //   expect(spy).toHaveBeenCalled()
  // })

  // it('should count only yours appointments', () => {
  //   const wrapper = mount(
  //     <Provider store={storeNoDoctor}>
  //       <MockRouter push={push}>
  //         <Appointments />
  //       </MockRouter>
  //     </Provider>,
  //   )
  //   const wrapperInside = wrapper.find('Appointments')
  //   expect(wrapperInside.props().appointmentsCount).toBe(2)
  // })
})

describe('Appointments doctor view', () => {
  it('should be able to mount component and render list but not button', () => {
    const wrapper = mount(
      <Provider store={storeDoctor}>
        <MockRouter push={push}>
          <Appointments />
        </MockRouter>
      </Provider>,
    )
    const wrapperInside = wrapper.find('Appointments')
    expect(wrapperInside.find('ul').exists()).toBeTruthy()
    expect(wrapperInside.find('button#agendar').exists()).toBeFalsy()
  })

  it('should shown 3 appointments on list', () => {
    const wrapper = mount(
      <Provider store={storeDoctor}>
        <MockRouter push={push}>
          <Appointments />
        </MockRouter>
      </Provider>,
    )
    const wrapperInside = wrapper.find('Appointments')
    expect(wrapperInside.props().appointments.length).toBe(3)
    expect(wrapperInside.find('li#listItem').length).toBe(3)
  })
  // it('should be able to remove token from local storage', () => {
  //   const spy = jest.spyOn(Storage.prototype, 'removeItem')

  //   const wrapper = mount(
  //     <Provider store={storeDoctor}>
  //       <MockRouter push={push}>
  //         <Appointments />
  //       </MockRouter>
  //     </Provider>,
  //   )
  //   const wrapperInside = wrapper.find('Appointments')
  //   wrapperInside.find('a#logout').simulate('click')
  //   expect(spy).toHaveBeenCalled()
  // })

  // it('should count only yours appointments', () => {
  //   const wrapper = mount(
  //     <Provider store={storeDoctor}>
  //       <MockRouter push={push}>
  //         <Appointments />
  //       </MockRouter>
  //     </Provider>,
  //   )
  //   const wrapperInside = wrapper.find('Appointments')
  //   expect(wrapperInside.props().appointmentsCount).toBe(2)
  // })
})
