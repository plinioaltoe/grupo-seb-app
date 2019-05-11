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

  it('should be able to add appointments', () => {
    const wrapper = mount(
      <Provider store={storeNoDoctor}>
        <MockRouter push={push}>
          <Appointments />
        </MockRouter>
      </Provider>,
    )

    const wrapperInside = wrapper.find('Appointments')
    const spy = jest.spyOn(wrapperInside.instance(), 'handleSubmit')
    const apDate = ['2019-05-02T15:00:00.000Z']
    wrapperInside.setState({ apDate })
    wrapperInside.find('button#agendar').simulate('submit')
    expect(spy).toHaveBeenCalled()
    expect(storeNoDoctor.getActions()).toContainEqual(
      AppointmentsActions.addAppointmentsRequest({
        appointmentDate: apDate,
        user: STATE_NO_DOCTOR.auth.data,
      }),
    )
  })

  it('should not be able to add appointments at the same time', () => {
    const wrapper = mount(
      <Provider store={storeNoDoctor}>
        <MockRouter push={push}>
          <Appointments />
        </MockRouter>
      </Provider>,
    )

    const wrapperInside = wrapper.find('Appointments')
    const apDate = ['2019-05-01T15:00:00.000Z']
    wrapperInside.setState({ apDate })
    wrapperInside.find('button#agendar').simulate('submit')
    expect(wrapperInside.instance().state.errorLocalMessage).toBe(
      'Já existe uma consulta marcada nessa data.',
    )
    expect(storeNoDoctor.getActions()).not.toContainEqual(
      AppointmentsActions.addAppointmentsRequest({
        appointmentDate: apDate,
        user: STATE_NO_DOCTOR.auth.data,
      }),
    )
  })

  it('should not be able to add appointments without date', () => {
    const wrapper = mount(
      <Provider store={storeNoDoctor}>
        <MockRouter push={push}>
          <Appointments />
        </MockRouter>
      </Provider>,
    )

    const wrapperInside = wrapper.find('Appointments')
    const apDate = ''
    wrapperInside.setState({ apDate })
    wrapperInside.find('button#agendar').simulate('submit')
    expect(wrapperInside.instance().state.errorLocalMessage).toBe('Insira uma data.')
    expect(storeNoDoctor.getActions()).not.toContainEqual(
      AppointmentsActions.addAppointmentsRequest({
        appointmentDate: apDate,
        user: STATE_NO_DOCTOR.auth.data,
      }),
    )
  })

  it('should count only yours appointments', () => {
    const wrapper = mount(
      <Provider store={storeNoDoctor}>
        <MockRouter push={push}>
          <Appointments />
        </MockRouter>
      </Provider>,
    )
    const wrapperInside = wrapper.find('Appointments')
    expect(wrapperInside.props().appointments.length).toBe(2)
  })
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

  it('should count all appointments', () => {
    const wrapper = mount(
      <Provider store={storeDoctor}>
        <MockRouter push={push}>
          <Appointments />
        </MockRouter>
      </Provider>,
    )
    const wrapperInside = wrapper.find('Appointments')
    expect(wrapperInside.props().appointments.length).toBe(3)
  })
})
