import EventService from '@/Services/EventService'
// use anonymous functions since on server side there should be used a new instance every time
export const state = () => ({
  events: [],
  event: {},
})
export const mutations = {
  SET_EVENTS(state, events) {
    state.events = events
  },
  SET_EVENT(state, event) {
    state.event = event
  },
}
export const actions = {
  fetchEvents({ commit, state }) {
    return EventService.getEvents().then((response) => {
      commit('SET_EVENTS', response.data)
    })
  },
  fetchEvent({ commit, state }, id) {
    return EventService.getEvent(id).then((response) => {
      commit('SET_EVENT', response.data)
    })
  },
}
