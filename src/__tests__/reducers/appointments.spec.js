import appointmentsReducer, { Creators as AppointmentsActions } from '../../store/ducks/appointments'

const INITIAL_STATE = {
  loading: false,
  data: [],
  error: null,
}

describe('Appointments Reducer', () => {
  test('should be able to call add request', () => {
    const appointmentDateTime = '01/01/2019'
    const state = appointmentsReducer(
      INITIAL_STATE,
      AppointmentsActions.addAppointmentsRequest({ appointmentDateTime }),
    )
    expect(state.data).toEqual([])
    expect(state.loading).toBeTruthy()
    expect(state.error).toBeNull()
  })

  test('should be able to call add failure', () => {
    const error = 'deu erro'
    const state = appointmentsReducer(INITIAL_STATE, AppointmentsActions.addAppointmentsFailure(error))
    expect(state.data).toEqual([])
    expect(state.loading).toBeFalsy()
    expect(state.error).toBe(error)
  })

  test('should be able to add appointments', () => {
    const appointmentDateTime = '01/01/2019'
    const state = appointmentsReducer(
      INITIAL_STATE,
      AppointmentsActions.addAppointmentsSuccess({ appointmentDateTime }),
    )

    expect(state.data).toContainEqual({ appointmentDateTime })
    expect(state.loading).toBeFalsy()
    expect(state.error).toBeNull()
  })

  test('should be able to remove appointments', () => {
    const data = [
      {
        id: 1,
        appointmentDateTime: '01/01/2019',
      },
      {
        id: 2,
        appointmentDateTime: '01/01/2020',
      },
    ]
    const INITIAL_STATE = {
      loading: false,
      data,
      error: null,
    }

    const state = appointmentsReducer(INITIAL_STATE, AppointmentsActions.rmAppointmentsRequest(1))

    expect(state.data).not.toContainEqual(data[0])
    expect(state.loading).toBeFalsy()
    expect(state.error).toBeNull()
  })
})
