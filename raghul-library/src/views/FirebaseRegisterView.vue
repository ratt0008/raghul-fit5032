<template>
    <h1>Create an Account</h1>
    <p><input type="text" placeholder="Email" v-model="email" /></p>
    <p><input type="password" placeholder="Password" v-model="password" /></p>
    <p><button @click="register">Create Account</button></p>
  </template>
  
  <script setup>
  import { ref } from "vue"
  import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
  import { useRouter } from "vue-router"
  
  const email = ref("")
  const password = ref("")
  const role = ref("user")
  const router = useRouter()
  const auth = getAuth()
  
  const register = () => {
    createUserWithEmailAndPassword(auth, email.value, password.value)
      .then(() => {
        console.log("Firebase Register Successful with role:", role.value)
        router.push("/FireLogin") 
      })
      .catch((error) => {
        console.log("Error creating account:", error.code, error.message)
      })
  }
  </script>
  