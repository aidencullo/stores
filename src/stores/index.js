// src/store/index.js
import { defineStore } from 'pinia';

// Define a store called 'counterStore'
export const useCounterStore = defineStore({
  // Unique name of the store
  id: 'counter',

  // Function that returns the initial state
  state: () => ({
    count: 0,
  }),

  // Optional actions and mutations
  actions: {
    increment() {
      console.log('increment');
      this.count++;
    },
    decrement() {
      this.count--;
    },
  },
});
