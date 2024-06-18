import { createApp } from 'vue';
import App from './App.vue';
import { createStore } from 'vuex'

const app = createApp(App);

app.mount('#app');

const store = createStore({
  state () {
    return {
      count: 0
    }
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})

app.use(store)
