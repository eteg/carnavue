<template>
  <eteg-form>
    <eteg-text-input label="To Do:" placeholder="e.g. Let's go to the mall today!" @onHitEnter="submitTodo" />

    <ul>
      <li v-for="todo in todos" v-text="todo" />
    </ul>
  </eteg-form>
</template>

<script>
  import EtegForm from '../../components/EtegForm.vue';
  import EtegTextInput from '../../components/EtegTextInput.vue';

  export default {
    components: { EtegForm, EtegTextInput },
    computed: {
      todos() {
        return this.$store.state.todos;
      },
    },

    methods: {
      submitTodo(todo) {
        if (todo) {
          this.$store.commit('addTodo', todo);
        }
      },
    },
  };
</script>
