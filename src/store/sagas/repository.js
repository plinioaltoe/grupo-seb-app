import { call, put } from 'redux-saga/effects'
import api from '../../services/api'
import { Creators as AppointmentsActions } from '../ducks/appointments'

// import { toast } from 'react-toastify'

export function* addAppointments(action) {
  try {
    const { payload } = action
    const { appointments, latitude, longitude } = payload
    const { data } = yield call(api.get, `/users/${appointments}`)

    const appointmentsData = {
      id: data.id,
      name: data.name,
      login: data.login,
      avatar_url: data.avatar_url,
      repos_url: data.repos_url,
      latitude,
      longitude,
    }

    yield put(AppointmentsActions.addAppointmentsSuccess(appointmentsData))
    // toast('Repositório adicionado com sucesso!')
  } catch (error) {
    const erroMsg = 'Erro ao adicionar repositório'
    // toast(erroMsg)
    yield put(AppointmentsActions.addAppointmentsFailure(erroMsg))
  }
}
