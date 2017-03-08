import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';

import * as types from './mutation-types';

Vue.use(VueAxios, axios);

export const addTodo = ({ commit }, todo) => {
  const newTodo = {
    text: todo,
    completed: false,
  };

  Vue.axios.post('/todos', newTodo, { baseURL: 'http://localhost:8080' }).then((response) => {
    commit(types.ADD_TODO, response.data);
  });
};

export const completeTodo = ({ commit }, todo) => {
  const href = todo._links.self.href; // eslint-disable-line no-underscore-dangle

  todo.completed = true;

  Vue.axios.put(href, todo).then(() => {
    commit(types.COMPLETE_TODO, href);
  });
};

export const getTodos = ({ commit }) => {
  Vue.axios.get('/todos', { baseURL: 'http://localhost:8080' }).then((response) => {
    commit(types.GET_TODOS, response.data._embedded.todos); // eslint-disable-line no-underscore-dangle
  });
};
