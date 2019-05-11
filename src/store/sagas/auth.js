import { call, put } from 'redux-saga/effects'
import { push } from 'connected-react-router'
import api from '../../services/api'
import { login } from '../../services/auth'
import { Creators as AuthActions } from '../ducks/auth'
import img from '../../assets/doctor.jpg'

export function* signin({ payload }) {
  try {
    const { username, isDoctor } = payload

    if (isDoctor) {
      yield put(AuthActions.authSuccess({
        name: 'Doutor', login: 'Doutor', avatar_url: img, isDoctor,
      }))
    } else {
      const { data } = yield call(api.get, `/users/${username}`)
      yield put(AuthActions.authSuccess({ ...data, isDoctor }))
    }
    login(isDoctor)
    yield put(push('/appointments'))
  } catch (error) {
    const erroMsg = 'Usuário inexistente.'
    yield put(AuthActions.authFailure(erroMsg + error))
  }
}
