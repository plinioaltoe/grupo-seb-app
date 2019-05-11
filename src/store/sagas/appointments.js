import { put } from 'redux-saga/effects'

import { toast } from 'react-toastify'
import { Creators as AppointmentsActions } from '../ducks/appointments'

export function* addAppointments({ payload }) {
  try {
    const { appointmentDate, user } = payload

    const appointments = {
      id: Math.random(),
      name: user.name,
      login: user.login,
      avatar_url: user.avatar_url,
      appointmentDate,
      user_id: user.id,
    }

    yield put(AppointmentsActions.addAppointmentsSuccess(appointments))
    toast('Marcação realizada com sucesso!')
  } catch (error) {
    const erroMsg = 'Erro ao adicionar appointment'
    toast(erroMsg)
    yield put(AppointmentsActions.addAppointmentsFailure(erroMsg))
  }
}
