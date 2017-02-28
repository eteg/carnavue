import * as actions from './actions';
import * as getters from './getters';
import mutations from './mutations';
import initialState from './initial-state';

export default {
  namespaced: true,
  actions,
  mutations,
  getters,
  state: initialState,
};
