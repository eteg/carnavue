<template>
  <eteg-form>
    <eteg-text-input label="To Do:" placeholder="e.g. Let's go to the mall today!" @onHitEnter="submitTodo" />

    <h3>Todos:</h3>
    <ul>
      <li v-for="todo in todos" v-text="todo.text" />
    </ul>

    <h3>Incompleted Todos:</h3>
    <ul>
      <li v-for="todo in incompletedTodos" v-text="todo.text" />
    </ul>

    <h3>Completed Todos:</h3>
    <ul>
      <li v-for="todo in completedTodos" v-text="todo.text" />
    </ul>
  </eteg-form>
</template>

<script>
  import { mapState, mapGetters } from 'vuex';

  import * as types from '../../store/mutation-types';

  import EtegForm from '../../components/EtegForm.vue';
  import EtegTextInput from '../../components/EtegTextInput.vue';

  export default {
    components: { EtegForm, EtegTextInput },

    computed: {
      ...mapState(['todos']),
      ...mapGetters(['completedTodos', 'incompletedTodos']),
    },

    methods: {
      submitTodo(todo) {
        if (todo) {
          this.$store.commit(types.ADD_TODO, todo);
        }
      },
    },
  };
</script>
