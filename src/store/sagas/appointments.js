import { call, put } from 'redux-saga/effects'
import api from '../../services/api'
import { Creators as AppointmentsActions } from '../ducks/appointments'

// import { toast } from 'react-toastify'

export function* addAppointments({ payload }) {
  try {
    const { appointmentDate, user } = payload

    const appointments = {
      id: Math.random(),
      name: user.name,
      login: user.login,
      avatar_url: user.avatar_url,
      appointmentDate,
    }

    yield put(AppointmentsActions.addAppointmentsSuccess(appointments))
    // toast('Repositório adicionado com sucesso!')
  } catch (error) {
    const erroMsg = 'Erro ao adicionar appointment'
    // toast(erroMsg)
    yield put(AppointmentsActions.addAppointmentsFailure(erroMsg))
  }
}
