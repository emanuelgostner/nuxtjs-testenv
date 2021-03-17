<template>
  <div>
    <h1>Event #{{ id }}</h1>
    <h2>{{ event.title }}</h2>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  head() {
    return {
      title: 'Event #' + this.id, // <-- For our title tag
      meta: [
        {
          hid: 'description',
          name: 'description', // <-- for our meta description tag
          content: 'Info about Event #' + this.id,
        },
      ],
    }
  },
  async fetch(context) {
    try {
      await context.store.dispatch('events/fetchEvent', context.params.id)
    } catch (e) {
      context.error({
        statusCode: 503,
        message: 'Unable to fetch event at this time',
      })
    }
  },
  computed: {
    id() {
      // context.params is an alias of $route.params
      return this.$route.params.id
    },
    ...mapState({
      event: (state) => state.events.event,
    }),
  },
}
</script>

<style scoped></style>
