import { all, takeLatest } from 'redux-saga/effects'
import { Types as AppointmentsTypes } from '../ducks/appointments'
import { Types as AuthTypes } from '../ducks/auth'
import { addAppointments } from './appointments'
import { signin } from './auth'

export default function* rootSaga() {
  const userSignIn = takeLatest(AuthTypes.REQUEST, signin)
  const appointmentsAdd = takeLatest(AppointmentsTypes.ADD_REQUEST, addAppointments)
  yield all([userSignIn, appointmentsAdd])
}
