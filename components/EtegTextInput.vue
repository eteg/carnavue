<template>
 <div class="form-group">
    <label :for="id">{{label}}</label>
    <input
      class="form-control"
      type="text"
      :id="id"
      :placeholder="placeholder"
      v-model="value"
      @keyup.enter="onHitEnter"
    />
    <span class="help-block">{{help}}</span>
  </div>
</template>

<script>
  export default {
    props: {
      label: {
        type: String,
        default: ''
      },
      placeholder: {
        type: String,
        default: ''
      },
      help: {
        type: String,
        default: ''
      }
    },

    data () {
      return {
        id: '',
        value: ''
      }
    },

    methods: {
      onHitEnter () {
        this.$emit('onHitEnter', this.value)
      }
    },

    created () {
      this.id = `input_${this._uid}` // eslint-disable-line no-underscore-dangle
    }
  }
</script>
