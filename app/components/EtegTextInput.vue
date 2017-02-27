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
  </div>
</template>

<script>
  export default {
    props: {
      label: {
        type: String,
        default: '',
      },
      placeholder: {
        type: String,
        default: 'www',
      },
    },

    data() {
      return {
        id: '',
        value: '',
      };
    },

    methods: {
      onHitEnter() {
        this.$emit('onHitEnter', this.value);
      },
    },

    created() {
      const uid = this._uid; // eslint-disable-line no-underscore-dangle
      this.id = `input_${uid}`;
    },
  };
</script>
