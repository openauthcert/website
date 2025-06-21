import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import './style.css';
import App from './App.vue';
import VendorList from './components/VendorList.vue';
import VendorDetail from './components/VendorDetail.vue';

const routes = [
  { path: '/', component: VendorList },
  { path: '/registry/:slug', component: VendorDetail, props: true },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount('#app');
