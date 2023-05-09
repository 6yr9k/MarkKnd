import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'hone',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ '@/views/AboutView.vue'),
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: () => import(/* webpackChunkName: "contact" */ '@/views/ContactsView.vue'),
    },
  ],
});

export default router;
