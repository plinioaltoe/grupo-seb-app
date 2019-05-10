import axios from 'axios'
import { getToken } from './auth'

const api = axios.create({
  baseURL: 'https://api.github.com',
})

export default api
