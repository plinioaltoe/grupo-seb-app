import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

//import { Creators as AuthActions } from '../../store/ducks/auth'

import { Container, Button, Text, Img, Form } from './styles'

class Login extends Component {
  static propTypes = {
    authRequest: PropTypes.func.isRequired,
    error: PropTypes.string.isRequired,
    loading: PropTypes.bool.isRequired,
  }

  state = {
    errorLocalMessage: '',
    email: '',
    password: '',
  }

  isEmpty = () => {
    const { email, password } = this.state
    if (!email) {
      this.setState({ errorLocalMessage: 'E-mail obrigatório.' })
      return true
    }
    if (!password) {
      this.setState({ errorLocalMessage: 'Password obrigatório.' })
      return true
    }
    return false
  }

  handleLogin = async e => {
    e.preventDefault()
    if (!this.isEmpty()) {
      const { authRequest } = this.props
      const { email, password } = this.state
      await authRequest({ email, password })
    }
  }

  handleChange = (e, campo) => {
    this.setState({ [campo]: e.target.value })
  }

  render() {
    const { email, password, errorLocalMessage } = this.state
    const user = { email, password }
    const { error, loading } = this.props
    return (
      <Fragment>
        <Container>
          <Form onSubmit={this.handleLogin}>
            {error && <p>{error}</p>}
            {errorLocalMessage && <p>{errorLocalMessage}</p>}
            <input type="checkbox" name="isDoctor" />
            <input
              type="text"
              placeholder="Logue com seu usuário do github"
              name="username"
              onChange={e => handleChange(e, 'username')}
              value={user.username}
            />
            <Button type="submit">{loading ? <i className="fa fa-spinner fa-pulse" /> : 'Entrar'}</Button>
            <Link to="/signup">
              <Text>Criar conta grátis</Text>
            </Link>
          </Form>
        </Container>
      </Fragment>
    )
  }
}

// const mapStateToProps = state => ({
//   error: state.auth.error,
//   loading: state.auth.loading,
// })

// const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch)

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(Login)

export default Login
