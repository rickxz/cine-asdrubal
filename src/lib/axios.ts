import axios from 'axios'

export const api = axios.create({
  baseURL: "https://67199a337fc4c5ff8f4de240.mockapi.io/api/v1"
})