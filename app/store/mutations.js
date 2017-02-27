import * as types from './mutation-types';

let idSequenceTodo = 0;

export default {
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
};
