<template>
    <div class="access-denied-container">
      <h2>Access Denied</h2>
      <p>You do not have permission to view this page. Please log in first.</p>
      <router-link to="/login">Go to Login Page</router-link>
      <button @click="handleLogout">Logout</button>
    </div>
  </template>
  
<script>
import { useRouter } from 'vue-router';

export default {
  name: 'AccessDeniedView',
  setup() {
    const router = useRouter();

    const handleLogout = () => {
      localStorage.removeItem('isAuthenticated');
      localStorage.removeItem('role');
      localStorage.removeItem('userRole');
      router.push({ name: 'Login' });
    };

    return {
      handleLogout,
    };
  },
};

</script>
  
<style scoped>
  .access-denied-container {
    text-align: center;
    padding: 20px;
  }
</style>