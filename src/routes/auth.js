export const TOKEN_KEY = '@login-Token'
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null

export const login = () => {
  localStorage.setItem(TOKEN_KEY, true)
}
export const logout = () => {
  localStorage.removeItem(TOKEN_KEY)
}
