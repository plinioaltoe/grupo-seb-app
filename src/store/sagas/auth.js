import { call, put } from 'redux-saga/effects'
import { push } from 'connected-react-router'
import api from '../../services/api'
import { login } from '../../services/auth'
import { Creators as AuthActions } from '../ducks/auth'

export function* signin({ payload }) {
  try {
    const { username } = payload
    const { data } = yield call(api.get, `/users/${username}`)
    console.log(data)
    yield put(AuthActions.authSuccess(data))
    login()
    yield put(push('/appointments'))
  } catch (error) {
    const erroMsg = 'Usuário inexistente.'
    yield put(AuthActions.authFailure(erroMsg + error))
  }
}
