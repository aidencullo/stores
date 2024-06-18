// Example Pinia initialization (src/main.js or src/main.ts)
import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia';

const app = createApp(App);
app.use(createPinia());

app.mount('#app');
