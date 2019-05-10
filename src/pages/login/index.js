import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { Creators as AuthActions } from '../../store/ducks/auth'

import { Container, Form } from './styles'

class Login extends Component {
  static propTypes = {
    authRequest: PropTypes.func.isRequired,
    error: PropTypes.string.isRequired,
    loading: PropTypes.bool.isRequired,
  }

  state = {
    errorLocalMessage: '',
    username: '',
    isDoctor: false,
  }

  isEmpty = () => {
    const { username } = this.state
    if (!username) {
      this.setState({ errorLocalMessage: 'Nome do repositório obrigatório.' })
      return true
    }

    return false
  }

  handleLogin = async e => {
    e.preventDefault()
    if (!this.isEmpty()) {
      const { authRequest } = this.props
      const { username } = this.state
      await authRequest({ username })
    }
  }

  render() {
    const { username, isDoctor, errorLocalMessage } = this.state
    const { error, loading } = this.props

    return (
      <Container>
        <Form onSubmit={this.handleLogin}>
          {error && <p>{error}</p>}
          {errorLocalMessage && <p>{errorLocalMessage}</p>}
          <label>
            <input type="checkbox" name="isDoctor" onChange={e => this.setState({ isDoctor: e.target.checked })} />
            Autenticar como médico
          </label>

          <input
            type="text"
            placeholder="Usuário do github"
            name="username"
            onChange={e => this.setState({ username: e.target.value })}
            value={username}
            disabled={isDoctor}
          />

          <button type="submit">{loading ? <i className="fa fa-spinner fa-pulse" /> : 'Entrar'}</button>
        </Form>
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  error: state.auth.error,
  loading: state.auth.loading,
})

const mapDispatchToProps = dispatch => bindActionCreators(AuthActions, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login)
