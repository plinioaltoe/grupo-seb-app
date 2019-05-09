/**
 * Types
 */

export const Types = {
  ADD_REQUEST: 'appointments/ADD_REQUEST',
  ADD_SUCESS: 'appointments/ADD_SUCESS',
  ADD_FAILURE: 'appointments/ADD_FAILURE',
  RM_SUCESS: 'appointments/RM_SUCESS',
}

/**
 * Reducers
 */
const INITIAL_STATE = {
  loading: false,
  data: [],
  error: '',
}

export default function appointments(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_REQUEST:
      return { ...state, loading: true }
    case Types.ADD_SUCESS:
      return { ...state, loading: false, error: '', data: [...state.data, action.payload.data] }
    case Types.ADD_FAILURE:
      return { ...state, loading: false, error: action.payload.error }
    case Types.RM_SUCESS:
      return {
        ...state,
        loading: false,
        error: '',
        data: state.data.filter(appointments => appointments.id !== action.payload.id),
      }
    default:
      return state
  }
}

/**
 * Actions
 */
export const Creators = {
  rmAppointmentsRequest: id => ({
    type: Types.RM_SUCESS,
    payload: { id },
  }),

  addAppointmentsRequest: ({ appointmentDateTime }) => ({
    type: Types.ADD_REQUEST,
    payload: { appointmentDateTime },
  }),

  addAppointmentsSuccess: data => ({
    type: Types.ADD_SUCESS,
    payload: { data },
  }),

  addAppointmentsFailure: error => ({
    type: Types.ADD_FAILURE,
    payload: { error },
  }),
}
