import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { logout } from '../../services/auth'

import { Container, Menu, Content } from './styles'

const Header = ({ appointmentsCount, loading }) => (
  <Container>
    <Content>
      <h1>Central de Marcação e Acompanhamento de Consultas. </h1>
      <i
        qtd={loading ? <i className="fa fa-spinner fa-pulse" /> : appointmentsCount}
        className="fa fa-calendar"
        aria-hidden="true"
      />
    </Content>
    <Menu>
      <Link onClick={() => logout()} to="/" id="logout">
        Logout
      </Link>
    </Menu>
  </Container>
)

Header.propTypes = {
  appointmentsCount: PropTypes.number.isRequired,
  loading: PropTypes.bool.isRequired,
}

const mapStateToProps = state => ({
  loading: state.appointments.loading,
  appointmentsCount: state.appointments.data.length,
})

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header)
