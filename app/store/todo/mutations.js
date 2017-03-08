import * as types from './mutation-types';

export default {
  [types.ADD_TODO](state, todo) {
    state.todos.push(todo);
  },

  [types.COMPLETE_TODO](state, href) {
    state.todos.forEach((todo) => {
      if (href === todo._links.self.href) { // eslint-disable-line no-underscore-dangle
        todo.completed = true;
      }
    });
  },

  [types.GET_TODOS](state, todos) {
    todos.forEach(todo => state.todos.push(todo));
  },
};
