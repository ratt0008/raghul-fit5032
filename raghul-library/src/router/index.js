import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import LoginView from '../components/LoginView.vue';
import AccessView from '../components/AccessView.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView,
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView,
    beforeEnter: (to, from, next) => {
      const isAuthenticated = localStorage.getItem('isAuthenticated');
      if (isAuthenticated === 'true') {
        next();
      } else {
        next('/login');
      }
    },
  },
  {
    path: '/',
    redirect: { name: 'Login' },
  },
  {
    path: '/access',
    name: 'Access',
    component: AccessView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router