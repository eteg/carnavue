import * as types from './mutation-types';

export const addTodo = ({ commit }, todo) => {
  commit(types.ADD_TODO, todo);
};

export const completeTodo = ({ commit }, id) => {
  commit(types.COMPLETE_TODO, id);
};
