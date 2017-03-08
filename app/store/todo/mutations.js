import * as types from './mutation-types';

export default {
  [types.ADD_TODO](state, todo) {
    state.todos.push(todo);
  },

  [types.UPDATE_TODO](state, todo) {
    state.todos = state.todos.map(e =>
      (todo._links.self.hre === e._links.self.href ? // eslint-disable-line no-underscore-dangle
        todo : e));
  },

  [types.GET_TODOS](state, todos) {
    todos.forEach(todo => state.todos.push(todo));
  },
};
