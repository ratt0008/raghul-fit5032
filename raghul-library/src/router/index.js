import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import LoginView from '../components/LoginView.vue';
import AccessView from '../components/AccessView.vue';
import FirebaseRegisterView from '@/views/FirebaseRegisterView.vue';
import FirebaseSigninView from '@/views/FirebaseSigninView.vue';
import AddBookView from '../views/AddBookView.vue';
import GetBookCount from '@/views/GetBookCount.vue';
import AddBookFunction from '@/views/AddBookFunction.vue';
import WeatherView from '@/views/WeatherView.vue';
import CountBookAPI from '@/views/CountBookAPI.vue';
import GetAllBooksAPI from '@/views/GetAllBooksAPI.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/Firelogin',
    name: 'Firelogin',
    component: FirebaseSigninView,
  },
  {
    path: '/addBook',
    name: '/AddBook',
    component: AddBookView,
  },
  {
    path: '/Fireregister',
    name: 'Fireregister',
    component: FirebaseRegisterView,
  },
  {
    path: '/GetBookCount',
    name: 'GetBookCount',
    component: GetBookCount,
  },
  {
    path: '/CountBookAPI',
    name: 'CountBookAPI',
    component: CountBookAPI,
  },
  {
    path: '/GetWeather',
    name: 'GetWeather',
    component: WeatherView,
  },
  {
    path: '/AddBookFunction',
    name: 'AddBookFunction',
    component: AddBookFunction,
  },
  {
    path: '/GetAllBooks',
    name: 'GetAllBooks',
    component: GetAllBooksAPI,
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView,
    beforeEnter: (to, from, next) => {
      const isAuthenticated = localStorage.getItem('isAuthenticated');
      const userRole = localStorage.getItem('role');
      
      if (isAuthenticated === 'true') {
        if (userRole === 'admin') {
          next();
        } else {
          next('/access');
        }
      } else {
        next('/Firelogin');
      }
    }
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
