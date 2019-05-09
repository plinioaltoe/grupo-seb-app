import './config/reactotron'

import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { ToastContainer } from 'react-toastify'

// import 'react-toastify/dist/ReactToastify.css'

import { store, persistor } from './store'
import Routes from './routes'
// import toastStyles from './styles/toast'
import GlobalStyle from './styles/global'

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <GlobalStyle />
      <Routes />
      {/* <ToastContainer {...toastStyles} /> */}
    </PersistGate>
  </Provider>
)

export default App
