<template>
  <div role="tabpanel" :class="selected ? 'tab-pane active' : 'tab-pane'" :id="id">
    <slot />
  </div>
</template>

<script>
  export default {
    props: ['title', 'active'],

    data () {
      return {
        id: '',
        selected: false
      }
    },

    mounted () {
      const uid = this._uid // eslint-disable-line no-underscore-dangle
      this.id = `tabId${uid}`
      this.selected = this.active
    }
  }
</script>

