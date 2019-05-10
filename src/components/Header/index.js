import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { logout } from '../../services/auth'

import { Container, Menu, Content } from './styles'

class Header extends Component {
  render() {
    const title = 'Central de Marcação e Acompanhamento de Consultas.'
    const qtd = 10
    return (
      <Container>
        <Content qtd={qtd}>
          <h1>{title} </h1>
          <i qtd={qtd} class="fa fa-calendar" aria-hidden="true" icon-white badge />
        </Content>
        <Menu>
          <Link onClick={() => logout()} to="/" id="logout">
            Logout
          </Link>
        </Menu>
      </Container>
    )
  }
}

const mapStateToProps = state => {
  console.log(state)
  return {
    loading: state.appointments.loading,
    appointments: state.appointments.data,
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header)
