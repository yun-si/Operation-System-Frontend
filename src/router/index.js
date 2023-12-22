// router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Bar from '../components/Bar.vue';
import MaterialOrderQuery from '../components/MaterialOrderQuery.vue';

const routes = [
  { path: '/', component: Bar },
  { path: '/material-order-query', name: 'MaterialOrderQuery', component: MaterialOrderQuery },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
