import './config/reactotron'
import 'react-toastify/dist/ReactToastify.css'

import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { ToastContainer } from 'react-toastify'

import { store, persistor } from './store'
import Routes from './routes'

import { GlobalStyle, toastStyles, Wrapper } from './styles'

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <GlobalStyle />
      <Wrapper>
        <Routes />
      </Wrapper>
      <ToastContainer {...toastStyles} />
    </PersistGate>
  </Provider>
)

export default App
