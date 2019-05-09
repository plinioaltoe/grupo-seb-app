/**
 * Types
 */

export const Types = {
  REQUEST: 'auth/REQUEST',
  SUCESS: 'auth/SUCESS',
  FAILURE: 'auth/FAILURE',
}

/**
 * Reducers
 */
const INITIAL_STATE = {
  loading: false,
  data: {},
  error: null,
}

export default function auth(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.REQUEST:
      return { ...state, loading: true }
    case Types.SUCESS:
      return { ...state, loading: false, error: null, data: action.payload.data }
    case Types.FAILURE:
      return { ...state, loading: false, error: action.payload.error }
    default:
      return state
  }
}

/**
 * Actions
 */
export const Creators = {
  authRequest: ({ username }) => ({
    type: Types.REQUEST,
    payload: { username },
  }),

  authSuccess: data => ({
    type: Types.SUCESS,
    payload: { data },
  }),

  authFailure: error => ({
    type: Types.FAILURE,
    payload: { error },
  }),
}
