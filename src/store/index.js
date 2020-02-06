import Vue from 'vue';
import Vuex from 'vuex';
import { PostStore } from './modules/PostStore';

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    PostStore
  }
})

export default store
