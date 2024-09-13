<template>
  <h1>Sign in</h1>
  <p><input type="text" placeholder="Email" v-model="email" /></p>
  <p><input type="password" placeholder="Password" v-model="password" /></p>
  <p><button @click="signin">Sign in via Firebase</button></p>
</template>

<script setup>
import { ref } from "vue"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import { useRouter } from "vue-router"

const email = ref("")
const password = ref("")
const role = ref("user") 
const router = useRouter()
const auth = getAuth()

const adminuser = 'admin@example.com' 
const adminpassword = 'adminPassword'
const adminrole = 'admin'

const signin = () => {
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then((data) => {
      const user = data.user

      if (email.value === adminuser && password.value === adminpassword) {
        localStorage.setItem('isAuthenticated', 'true')
        localStorage.setItem('role', adminrole)
        console.log("Admin sign-in successful")
        router.push("/")
      } else {
        localStorage.setItem('isAuthenticated', 'true')
        localStorage.setItem('role', role.value) 
        console.log("User sign-in successful")
        router.push("/")  
      }
    })
    .catch((error) => {
      console.error("Error during sign-in:", error.message, error.code)
    })
}
</script>
