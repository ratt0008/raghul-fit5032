import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import LoginView from '../components/LoginView.vue';
import AccessView from '../components/AccessView.vue';
import FirebaseRegisterView from '@/views/FirebaseRegisterView.vue';
import FirebaseSigninView from '@/views/FirebaseSigninView.vue';
import { getFirestore, doc, getDoc } from "firebase/firestore"
import { getAuth } from "firebase/auth"

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
    path: '/Firelogin',
    name: 'Firelogin',
    component: FirebaseSigninView,
  },
  {
    path: '/Fireregister',
    name: 'Fireregister',
    component: FirebaseRegisterView,
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView,
    beforeEnter: (to, from, next) => {
      const isAuthenticated = localStorage.getItem('isAuthenticated');
      const isRole = localStorage.getItem('role');
      
      if (isAuthenticated === 'true') {
        getUserRole().then(role => {
          if (role === 'admin' || isRole === 'admin') {
            next();
          } else {
            next('/access');
          }
        
          
        }).catch(error => {
          console.log("Error fetching role:", error);
          next('/login');
        });
      } else {
        next('/access');
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


// Function to get user role from Firestore
const getUserRole = async () => {
  const db = getFirestore();
  const auth = getAuth();
  const user = auth.currentUser;

  if (user) {
    const userDoc = await getDoc(doc(db, "users", user.uid));
    
    if (userDoc.exists()) {
      const userData = userDoc.data();
      const role = userData.role;
      localStorage.setItem('userRole', role); // Store role in localStorage for session persistence
      return role;
    } else {
      console.log("No such document in Firestore for this user");
      return null;
    }
  } else {
    console.log("No user is logged in");
    return null;
  }
};

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
