// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
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
const db = getFirestore();
export default db