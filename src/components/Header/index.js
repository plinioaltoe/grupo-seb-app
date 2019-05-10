import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { logout } from '../../services/auth'

import { Container, Menu, Content } from './styles'

class Header extends Component {
  static propTypes = {
    appointmentsCount: PropTypes.number.isRequired,
    loading: PropTypes.bool.isRequired,
  }

  render() {
    const title = 'Central de Marcação e Acompanhamento de Consultas.'
    const { appointmentsCount } = this.props
    return (
      <Container>
        <Content>
          <h1>{title} </h1>
          <i qtd={appointmentsCount} className="fa fa-calendar" aria-hidden="true" />
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
    appointmentsCount: state.appointments.data.length,
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header)
