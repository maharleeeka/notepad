import './bootstrap';
import '../css/app.css';
import { createApp } from 'vue';
import VueAxios from 'vue-axios';
import axios from 'axios';
import * as VueRouter from 'vue-router';
import { createPinia } from 'pinia';

import Main from './layouts/Main.vue';
import About from './layouts/About.vue';
import Home from './layouts/Home.vue';
import Note from './layouts/Note.vue';
import ViewNote from './layouts/ViewNote.vue';

const routes = [
  { path: '/', component: About },
  { path: '/about', component: About },
  { path: '/notes', name: 'notes.view', component: Home },
  { path: '/note-list', component: Note },
  { path: '/notes/:id', name: 'note-item.view', component: ViewNote, props: true }
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
});

const app = createApp(Main)
app.use(router);
app.use(VueAxios, axios);
app.use(createPinia())
app.mount('#app')