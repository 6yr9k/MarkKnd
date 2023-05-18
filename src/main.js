import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/main.scss';
import 'aos/dist/aos.css';
import '@mdi/font/css/materialdesignicons.css';
import AOS from 'aos';

// Vuetify
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { aliases, mdi } from 'vuetify/iconsets/mdi';
import VWave from 'v-wave';

const app = createApp(App);

app.use(router);
app.use(VWave, {
  initialOpacity: 0.5,
  easing: 'ease-in',
});

app.use(
  createVuetify({
    components,
    directives,
    icons: {
      defaultSet: 'mdi',
      aliases,
      sets: { mdi },
    },
  }),
);

AOS.init({
  duration: 1000,
  easing: 'ease-in-sine',
  delay: 0,
  once: true,
});

app.mount('#app');
