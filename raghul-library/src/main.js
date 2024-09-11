import 'bootstrap/dist/css/bootstrap.min.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const app = createApp(App)
app.use(PrimeVue, { theme: { preset: Aura } })
app.use(router)

app.mount('#app')

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlogToYt3Qg_HoKoopOYHc_KKFJL8e--k",
  authDomain: "week7-raghul.firebaseapp.com",
  projectId: "week7-raghul",
  storageBucket: "week7-raghul.appspot.com",
  messagingSenderId: "704941634269",
  appId: "1:704941634269:web:6b01ade1f1f193d1b96134"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export default firebaseApp;
