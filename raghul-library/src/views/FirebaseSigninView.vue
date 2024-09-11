<template>
    <h1>Sign in</h1>
    <p><input type="text" placeholder="Email" v-model="email" /></p>
    <p><input type="password" placeholder="Password" v-model="password" /></p>
    <p><button @click="signin">Sign in via Firebase</button></p>
  </template>
  
  <script setup>
  import { ref } from "vue"
  import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
  import { getFirestore, doc, getDoc } from "firebase/firestore"
  import { useRouter } from "vue-router"
  
  const email = ref("")
  const password = ref("")
  const router = useRouter()
  const auth = getAuth()
  const db = getFirestore()
  
  const signin = () => {
    signInWithEmailAndPassword(auth, email.value, password.value)
      .then(async (data) => {
        const uid = data.user.uid
  
        const userDoc = await getDoc(doc(db, "users", uid))
        if (userDoc.exists()) {
          const userData = userDoc.data()
          const role = userData.role
  
          console.log("User Role:", role)
  
          if (role === "admin") {
            localStorage.setItem('isAuthenticated', 'true');
            router.push("/")
          } else if (role === "user") {
            localStorage.setItem('isAuthenticated', 'true');
            router.push("/")
          }
        } else {
          console.log("No user data found in Firestore.")
        }
      })
      .catch((error) => {
        console.error("Error during sign-in:", error.message, error.code) // Log more error details
      })
  }
  </script>
  