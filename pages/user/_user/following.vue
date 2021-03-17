<template>
  <div>User #{{ username }} has followers: ...</div>
</template>

<script>
export default {
  computed: {
    username() {
      return this.$route.params.user
    },
  },
}
</script>
