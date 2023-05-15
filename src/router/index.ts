import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import { RouterLink } from '@/enums';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: RouterLink.HOME,
      name: 'home',
      component: HomeView,
    },
    {
      path: RouterLink.ABOUT,
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ '@/views/AboutView.vue'),
    },
    {
      path: RouterLink.SERVICE,
      name: 'service',
      component: () => import(/* webpackChunkName: "contact" */ '@/views/ServiceView.vue'),
      children: [
        {
          path: RouterLink.SERVICE,
          name: 'service list',
          component: () => import('@/components/servicePage/ServiceList/ServiceList.vue'),
        },
        {
          path: RouterLink.SERVICE_DETAILS,
          name: 'service details',
          component: () => import('@/components/servicePage/ServiceDetails/ServiceDetails.vue'),
        },
      ],
    },
    {
      path: RouterLink.CONTACT,
      name: 'contacts',
      component: () => import(/* webpackChunkName: "contact" */ '@/views/ContactsView.vue'),
    },
  ],
});

export default router;
