export const DOCTOR_KEY = '@isDoctor'
export const APPOINTMENTS_KEY = '@appointments'
export const isAuthenticated = () => localStorage.getItem(DOCTOR_KEY) !== null

export const login = isDoctor => {
  localStorage.setItem(DOCTOR_KEY, isDoctor)
}

export const save = appointments => {
  localStorage.setItem(APPOINTMENTS_KEY, appointments)
}

export const getAppointments = id => {
  // const appointments = localStorage.getItem(APPOINTMENTS_KEY)
  // if (!appointments) return []
  // if (!id) return appointments
  // return appointments.find(ap => ap.id === id)
}

export const clear = () => {
  localStorage.removeItem(APPOINTMENTS_KEY)
}

export const logout = () => {
  clear()
  localStorage.removeItem(DOCTOR_KEY)
}
