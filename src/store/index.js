// store.js
import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      count: 0,
      name: 'i am vuex',
    };
  },
  mutations: {
    increment(state) {
      state.count++;
    }
  },
  actions: {
    increment({ commit }) {
      commit('increment');
    }
  },
  getters: {
    doubleCount(state) {
      return state.count * 2;
    }
  }
});

export default store;
