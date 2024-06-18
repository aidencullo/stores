// src/composables/useCount.js
import { ref } from 'vue';

export default function useCount() {
  const count = ref(0);

  const increment = () => {
    count.value++;
  };

  const decrement = () => {
    count.value--;
  };

  return {
    count,
    increment,
    decrement,
  };
}
