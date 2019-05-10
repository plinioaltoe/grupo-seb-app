import { combineReducers } from 'redux'

import { connectRouter } from 'connected-react-router'
import history from '../../routes/history'

import appointments from './appointments'
import auth from './auth'

export default combineReducers({
  router: connectRouter(history),
  appointments,
  auth,
})
