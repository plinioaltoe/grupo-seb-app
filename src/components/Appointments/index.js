import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Flatpickr from 'react-flatpickr'
import { Portuguese } from 'flatpickr/dist/l10n/pt'
import moment from 'moment'
import { filterAndOrderByDate } from '../utils'

import { Creators as AppointmentsActions } from '../../store/ducks/appointments'
import {
  Container, List, User, Appointment, Form, Erro,
} from './styles'

import 'flatpickr/dist/themes/light.css'
import 'moment/locale/pt-br'

moment.locale('pt-br')

class Appointments extends Component {
  static propTypes = {
    appointments: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        avatar_url: PropTypes.string,
        appointmentDate: PropTypes.arrayOf(
          PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string]),
        ),
      }),
    ).isRequired,
    appointmentsDoctor: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        avatar_url: PropTypes.string,
        appointmentDate: PropTypes.arrayOf(
          PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string]),
        ),
      }),
    ).isRequired,
    loading: PropTypes.bool.isRequired,
    addAppointmentsRequest: PropTypes.func.isRequired,
    rmAppointmentsRequest: PropTypes.func.isRequired,
    user: PropTypes.shape({
      name: PropTypes.string,
      avatar_url: PropTypes.string,
    }).isRequired,
    error: PropTypes.string.isRequired,
  }

  state = {
    apDate: '',
    errorLocalMessage: '',
  }

  getFormatedDate = () => {
    const { apDate } = this.state
    return moment(apDate[0])
  }

  isEmpty = () => {
    const { apDate } = this.state
    const { appointmentsDoctor } = this.props

    if (!apDate) {
      this.setState({ errorLocalMessage: 'Insira uma data.' })
      return true
    }

    const hasAppointments = appointmentsDoctor.find(
      ap => moment(ap.appointmentDate[0]).format() === moment(apDate[0]).format(),
    )

    if (hasAppointments) {
      this.setState({ errorLocalMessage: 'Já existe uma consulta marcada nessa data.' })
      return true
    }
    return false
  }

  cleanState = () => {
    this.setState({
      apDate: '',
      errorLocalMessage: '',
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if (!this.isEmpty()) {
      const { addAppointmentsRequest, user } = this.props
      const { apDate } = this.state
      addAppointmentsRequest({ appointmentDate: apDate, user })
      this.cleanState()
    }
  }

  render() {
    const { apDate, errorLocalMessage } = this.state
    const {
      rmAppointmentsRequest, appointments, user, error, loading,
    } = this.props

    const { isDoctor, name } = user
    const welcome = isDoctor ? (
      <Fragment>
        <strong> Olá, doutor</strong>
        <p>Confira sua agenda abaixo</p>
      </Fragment>
    ) : (
      <Fragment>
        <strong> Olá, {name}</strong>
        <p>Confira suas consultas marcadas</p>
      </Fragment>
    )
    return (
      <Container>
        {welcome}
        <List>
          {appointments.map(ap => (
            <li key={ap.id} id="listItem">
              <User>
                <img src={ap.avatar_url} alt="Avatar" />
                <strong>{ap.name}</strong>
              </User>
              <Appointment>
                <strong>Data e hora da consulta: </strong>
                <span>{moment(ap.appointmentDate[0]).format('LLLL')}</span>
              </Appointment>
              <button
                onClick={() => rmAppointmentsRequest(ap.id)}
                type="button"
                id={`delete${ap.id}`}
              >
                <i className="fa fa-times-circle" />
              </button>
            </li>
          ))}
        </List>
        {!isDoctor && (
          <Fragment>
            <Form onSubmit={this.handleSubmit}>
              {error && <Erro>{error}</Erro>}
              {errorLocalMessage && <Erro>{errorLocalMessage}</Erro>}
              <div>
                <p>Agendar nova consulta:</p>
                <Flatpickr
                  placeholder="Escolhar uma data"
                  data-enable-time
                  value={apDate}
                  options={{
                    locale: Portuguese,
                    time_24hr: true,
                    dateFormat: 'D, d \\de M \\de Y à\\s H:i',
                  }}
                  onChange={date => this.setState({ apDate: date })}
                />
              </div>
              <button type="submit" id="agendar">
                {loading ? <i className="fa fa-spinner fa-pulse" /> : 'Agendar'}
              </button>
            </Form>
          </Fragment>
        )}
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  loading: state.appointments.loading,
  appointments: filterAndOrderByDate(state.appointments.data, state.auth.data),
  appointmentsDoctor: state.appointments.data,
  user: state.auth.data,
  error: state.appointments.error,
})

const mapDispatchToProps = dispatch => bindActionCreators(AppointmentsActions, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Appointments)
