import './bootstrap';
import '../css/app.css';
import { createApp } from 'vue';
import * as VueRouter from 'vue-router';

import Main from './layouts/Main.vue';
import About from './layouts/About.vue';
import Home from './layouts/Home.vue';

const routes = [
  { path: '/about', component: About },
  { path: '/home', component: Home }
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
});

const app = createApp(Main)
app.use(router);
app.mount('#app')