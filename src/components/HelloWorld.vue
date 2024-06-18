<script setup>
import { reactive } from 'vue'
const users = reactive([
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Doe' },
])
// ✨
</script>

<template>
  {{ users }}
  <button @click="users.push({ id: 3, name: 'John Smith' })">Add User</button>
</template>

<style scoped>
</style>
