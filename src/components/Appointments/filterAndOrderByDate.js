export const filterAndOrderByDate = (appointments, user) => {
  const ordered = appointments.sort(
    (a, b) => new Date(a.appointmentDate) - new Date(b.appointmentDate),
  )

  let filtered = ordered
  if (!user.isDoctor) filtered = ordered.filter(item => item.user_id === user.id)
  return filtered
}
