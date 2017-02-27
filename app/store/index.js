import Vue from 'vue';
import Vuex from 'vuex';

// import * as actions from './actions';
// import * as getters from './getters';

Vue.use(Vuex);

let idSequenceTodo = 0;

export default new Vuex.Store({
  state: {
    todos: [],
  },
  mutations: {
    addTodo(state, todo) {
      idSequenceTodo += 1;
      state.todos.push({
        id: idSequenceTodo,
        text: todo,
        completed: false,
      });
    },
  },
  getters: {
    completedTodos(state) {
      return state.todos.filter(todo => todo.completed);
    },
    incompletedTodos(state) {
      return state.todos.filter(todo => !todo.completed);
    },
  },
});
