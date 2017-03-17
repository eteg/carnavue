import * as types from './mutation-types';

export const increment = ({ commit }) => {
  commit(types.INCREMENT);
};

export const decrement = ({ commit }) => {
  commit(types.DECREMENT);
};
