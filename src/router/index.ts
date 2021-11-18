import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../pages/Home.vue';
import PersonCard from '../pages/PersonCard.vue';
import Main from '../pages/Main.vue';
import Documents from '../pages/Documents.vue';
import DocumentCard from '../pages/DocumentCard.vue';
import CreateDocument from '../pages/CreateDocument.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Main',
    component: Main,
  },
  {
    path: '/author',
    name: 'AuthorTable',
    component: Home,
  },
  {
    path: '/author/:id',
    name: 'PersonCard',
    component: PersonCard,
  },
  {
    path: '/documents',
    name: 'Documents',
    component: Documents,
  },
  {
    path: '/documents/:id',
    name: 'DocumentCard',
    component: DocumentCard,
  },
  {
    path: '/create',
    name: 'CreateDocument',
    component: CreateDocument,
  },
];

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
});

export default router;
