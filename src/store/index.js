import { createStore } from 'vuex'
import user from '@/store/modules/user'
import event from '@/store/modules/event'

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: { user, event }
})
