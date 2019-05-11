import appointmentsReducer, {
  Creators as AppointmentsActions,
} from '../../store/ducks/appointments'

import { STATE_NO_DOCTOR } from '../../__mocks__/states'

const INITIAL_STATE = {
  loading: false,
  data: [],
  error: null,
}

describe('Appointments Reducer', () => {
  test('should be able to call add request', () => {
    const appointmentDate = '01/01/2019'
    const state = appointmentsReducer(
      INITIAL_STATE,
      AppointmentsActions.addAppointmentsRequest({ appointmentDate }),
    )
    expect(state.data).toEqual([])
    expect(state.loading).toBeTruthy()
    expect(state.error).toBeNull()
  })

  test('should be able to call add failure', () => {
    const error = 'deu erro'
    const state = appointmentsReducer(
      INITIAL_STATE,
      AppointmentsActions.addAppointmentsFailure(error),
    )
    expect(state.data).toEqual([])
    expect(state.loading).toBeFalsy()
    expect(state.error).toBe(error)
  })

  test('should be able to add appointments', () => {
    const appointmentDate = '01/01/2019'
    const state = appointmentsReducer(
      INITIAL_STATE,
      AppointmentsActions.addAppointmentsSuccess({ appointmentDate }),
    )

    expect(state.data).toContainEqual({ appointmentDate })
    expect(state.loading).toBeFalsy()
    expect(state.error).toBe('')
  })

  test('should be able to remove appointments', () => {
    const state = appointmentsReducer(
      STATE_NO_DOCTOR.appointments,
      AppointmentsActions.rmAppointmentsRequest(1),
    )

    expect(state.data).not.toContainEqual(STATE_NO_DOCTOR.appointments[0])
    expect(state.loading).toBeFalsy()
    expect(state.error).toBe('')
  })
})
