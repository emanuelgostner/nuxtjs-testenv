import axios from 'axios'

const apiClient = axios.create({
  baseURL: `https://my-json-server.typicode.com/Code-Pop/real-world-nuxt`,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export default {
  getEvents() {
    console.log('getEvents')
    return apiClient.get('/events')
  },
  getEvent(id) {
    console.log('getEvent')
    return apiClient.get('/events/' + id)
  },
}
