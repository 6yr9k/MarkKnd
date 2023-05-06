import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import './assets/main.scss';

// Vuetify
import 'vuetify/dist/vuetify.min.css';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(
  createVuetify({
    ssr: true,
    components,
    directives,
  }),
);

app.mount('#app');
