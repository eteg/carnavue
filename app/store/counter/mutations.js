import * as types from './mutation-types';

export default {
  [types.INCREMENT](state) {
    state.count += 1;
  },

  [types.DECREMENT](state) {
    state.count -= 1;
  },
};
