import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/main.scss';
import 'aos/dist/aos.css';
import AOS from 'aos';

// Vuetify
import 'vuetify/dist/vuetify.min.css';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

const app = createApp(App);

app.use(router);
app.use(
  createVuetify({
    ssr: true,
    components,
    directives,
  }),
);

AOS.init({
  duration: 1000,
  easing: 'ease-in-sine',
  delay: 0,
  once: true,
});

app.mount('#app');
