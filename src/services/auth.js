export const TOKEN = '@token'

export const isAuthenticated = () => localStorage.getItem(TOKEN) !== null

export const login = () => {
  localStorage.setItem(TOKEN, 'login')
}
export const logout = () => {
  localStorage.removeItem(TOKEN)
}
