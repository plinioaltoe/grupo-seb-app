import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { Container } from './styles'

class Appointments extends Component {
  render() {
    const { appointments, rmAppointmentsRequest } = this.props
    return (
      <Container>
        <div className="card">
          {appointments.map(ap => (
            <div className="header">
              <div className="nickAndNameAndImg">
                <img className="avatarList" src={ap.avatar_url} alt="Poker Face" />
                <div>
                  <div className="name">{ap.name}</div>
                  <div className="nick">{ap.login}</div>
                </div>
              </div>
              <button className="excluir" onClick={() => rmAppointmentsRequest(ap.id)}>
                <i className="fa fa-times-circle" />
              </button>
            </div>
            // <hr />
          ))}
        </div>
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
)(Appointments)
