import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Flatpickr from 'react-flatpickr'
import { Portuguese } from 'flatpickr/dist/l10n/pt'

import { Creators as AppointmentsActions } from '../../store/ducks/appointments'

import { Container, List, User, Appointment, Form, Button, Flat } from './styles'

import 'flatpickr/dist/themes/light.css'

class Appointments extends Component {
  static propTypes = {
    appointments: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        avatar_url: PropTypes.string,
        dateTime: PropTypes.instanceOf(Date),
      }),
    ).isRequired,
    loading: PropTypes.bool.isRequired,
    addAppointmentsRequest: PropTypes.func.isRequired,
    user: PropTypes.shape({
      name: PropTypes.string,
      avatar_url: PropTypes.string,
      dateTime: PropTypes.instanceOf(Date),
    }).isRequired,
  }

  state = {
    appointmentDate: '',
  }

  handleSubmit = e => {
    e.preventDefault()
    const { addAppointmentsRequest, user } = this.props
    const { appointmentDate } = this.state
    addAppointmentsRequest({ appointmentDate, user })
  }

  render() {
    const { appointmentDate } = this.state
    const { rmAppointmentsRequest, appointments } = this.props

    return (
      <Container>
        <strong> Olá, doutor</strong>
        <p>Confira sua agenda abaixo</p>
        <List>
          {appointments.map(ap => (
            <li key={ap.id}>
              <User>
                <img src={ap.avatar_url} alt="Avatar" />
                <strong>{ap.name}</strong>
              </User>
              <Appointment>
                <strong>Data e hora da consulta: </strong>
                <label>{ap.appointmentDate}</label>
              </Appointment>
              <button onClick={() => rmAppointmentsRequest(ap.id)}>
                <i className="fa fa-times-circle" />
              </button>
            </li>
          ))}
        </List>
        <Form onSubmit={this.handleSubmit}>
          <Flatpickr
            placeholder="Escolhar uma data"
            data-enable-time
            value={appointmentDate}
            options={{
              locale: Portuguese,
              time_24hr: true,
              dateFormat: 'D, d \\de M \\de Y à\\s H:i',
            }}
            onChange={date => {
              this.setState({ appointmentDate: date })
            }}
          />

          <button type="submit">Agendar</button>
        </Form>
      </Container>
    )
  }
}

const mapStateToProps = state => {
  console.log(state)
  return {
    loading: state.appointments.loading,
    appointments: state.appointments.data,
    user: state.auth.data,
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(AppointmentsActions, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Appointments)
