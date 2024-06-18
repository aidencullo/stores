<template>
  <div>
    <p>{{ count }}</p>
    <p>{{ doubleCount }}</p>
    <p>{{ version }}</p>
    <button @click="increment">Increment</button>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useCounterStore } from '../store';

export default {
  setup() {
    const counterStore = useCounterStore();

    const count = computed(() => counterStore.count);
    const version = computed(() => counterStore.version);
    const doubleCount = computed(() => counterStore.doubleCount);

    const increment = () => {
      counterStore.increment();
    };

    return {
      count,
      version,
      doubleCount,
      increment
    };
  }
};
</script>
