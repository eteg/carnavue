import * as actions from './actions'
import mutations from './mutations'
import initialState from './initial-state'

export default {
  namespaced: true,
  actions,
  mutations,
  state: initialState
}
