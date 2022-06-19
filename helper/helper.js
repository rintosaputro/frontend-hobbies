import axios from 'axios'

const {NEXT_API_URL} = process.env

const http = (token) => {
  const headers = {}
  if (token) {
    headers.Authorization = `Bearer ${token}`
  }
  return axios.create({
    baseURL: NEXT_API_URL,
    headers
  })
}

export default http
