import Vue from 'vue';
import Vuex from 'vuex';

import todo from './todo';
import counter from './counter';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    todo,
    counter,
  },
});
