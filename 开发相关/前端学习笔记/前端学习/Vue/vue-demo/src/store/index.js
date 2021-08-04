import Vue from 'vue'
import Vuex from 'vuex'

import my from './modules/my'
import global from './modules/global'
import list from './modules/list'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    global: global,
    my: my,
    list: list
  }
})

export default store;