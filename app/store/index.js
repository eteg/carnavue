import Vue from 'vue';
import Vuex from 'vuex';

import * as types from './mutation-types';
// import * as actions from './actions';
// import * as getters from './getters';

Vue.use(Vuex);

let idSequenceTodo = 0;

export default new Vuex.Store({
  state: {
    todos: [],
  },

  mutations: {
    [types.ADD_TODO](state, todo) {
      idSequenceTodo += 1;
      state.todos.push({
        id: idSequenceTodo,
        text: todo,
        completed: false,
      });
    },

    [types.COMPLETE_TODO](state, id) {
      state.todos.forEach((todo) => {
        if (id === todo.id) {
          todo.completed = true;
        }
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
