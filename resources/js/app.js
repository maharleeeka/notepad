import './bootstrap';
import '../css/app.css';
import { createApp } from 'vue';
import VueAxios from 'vue-axios';
import axios from 'axios';
import * as VueRouter from 'vue-router';

import Main from './layouts/Main.vue';
import About from './layouts/About.vue';
import Home from './layouts/Home.vue';
import Note from './layouts/Note.vue';

const routes = [
  { path: '/about', component: About },
  { path: '/home', component: Home },
  { path: '/note-list', component: Note }
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
});

const app = createApp(Main)
app.use(router);
app.use(VueAxios, axios);
app.mount('#app')