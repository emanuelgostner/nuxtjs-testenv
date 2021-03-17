<template>
  <div>
    <h1>Events</h1>
    <div>
      <EventCard
        v-for="(event, index) in events"
        :key="index"
        :event="event"
        :data-index="index"
      />
    </div>
  </div>
</template>

<script>
import EventCard from '@/components/EventCard'
import { mapState } from 'vuex'
export default {
  components: {
    EventCard,
  },
  async fetch(context) {
    try {
      // alternative to using line below, ES6 code destructuring can be used
      // const response = await context.$axios.get('http://localhost:3001/events')
      await context.store.dispatch('events/fetchEvents')
    } catch (e) {
      context.error({
        statusCode: 503,
        message: 'Unable to fetch events at this time',
      })
    }
  },
  computed: mapState({
    events: (state) => state.events.events,
  }),
  head() {
    return {
      title: 'Event Listing', // <-- For our title tag
    }
  },
}
</script>

<style></style>
