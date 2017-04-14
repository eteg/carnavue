<template>
  <div style="text-align: center; margin-top: 1em;">
    <input type="button"  value="-" @click="decrement" />
    <b>{{count}}</b>
    <input type="button"  value="+" @click="increment" />
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'

  export default {
    computed: {
      ...mapState('counter', ['count'])
    },

    methods: {
      ...mapActions('counter', ['increment', 'decrement'])
    }
  }
</script>
