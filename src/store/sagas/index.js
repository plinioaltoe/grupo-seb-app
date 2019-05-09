import { all, takeLatest } from 'redux-saga/effects'
import { Types as AppointmentsTypes } from '../ducks/appointments'
import { addAppointments } from './appointments'

export default function* rootSaga() {
  yield all([takeLatest(AppointmentsTypes.ADD_REQUEST, addAppointments)])
}
