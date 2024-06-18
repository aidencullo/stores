<template>
  <div>
    <p>{{ count }}</p>
    <p>{{ doubleCount }}</p>
    <p>{{ name }}</p>
    <button @click="increment">Increment</button>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  setup() {
    const store = useStore();

    const count = computed(() => store.state.count);
    const doubleCount = computed(() => store.getters.doubleCount);
    const name = computed(() => store.state.name);

    const increment = () => {
      store.dispatch('increment');
    };

    return {
      count,
      name,
      doubleCount,
      increment,
    };
  }
};
</script>
