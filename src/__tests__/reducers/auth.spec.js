import authReducer, { Creators as AuthActions } from '../../store/ducks/auth'

const INITIAL_STATE = {
  loading: false,
  data: {},
  error: '',
}

describe('Auth Reducer', () => {
  test('should be able to call get request', () => {
    const any = {
      username: 'any',
    }
    const state = authReducer(INITIAL_STATE, AuthActions.authRequest(any))
    expect(state.data).toEqual({})
    expect(state.loading).toBeTruthy()
    expect(state.error).toBe('')
  })

  test('should be able to get failure', () => {
    const error = 'deu erro'
    const state = authReducer(INITIAL_STATE, AuthActions.authFailure(error))
    expect(state.data).toEqual({})
    expect(state.loading).toBeFalsy()
    expect(state.error).toBe(error)
  })

  test('should be able to authenticate user', () => {
    const login = {
      username: 'plinioaltoe',
    }
    const state = authReducer(INITIAL_STATE, AuthActions.authSuccess(login))
    expect(state.data).toEqual(login)
    expect(state.loading).toBeFalsy()
    expect(state.error).toBe('')
  })
})
