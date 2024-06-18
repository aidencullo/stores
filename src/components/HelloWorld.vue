<template>
  <div>
    <p>Current count: {{ count }}</p>
    <button @click="increment">Increment</button>
    <button @click="reset">Reset</button>
  </div>
</template>

<script>
export default {
  // Component name
  name: 'CounterComponent',

  // Data option
  data() {
    return {
      count: 0,
    };
  },

  // Methods option
  methods: {
    increment() {
      this.count++;
    },
    reset() {
      this.count = 0;
    },
  },

  // Lifecycle hook
  mounted() {
    console.log('CounterComponent has been mounted!');
  },

  // Watchers
  watch: {
    count(newValue, oldValue) {
      console.log(`Count changed from ${oldValue} to ${newValue}`);
    },
  },

  // Computed properties
  computed: {
    doubleCount() {
      return this.count * 2;
    },
  },
};
</script>

<style scoped>
button {
  margin-right: 10px;
}
</style>
