<template>
    <div class="access-denied-container">
      <h2>Access Denied</h2>
      <p>You do not have permission to view this page. Please log in first.</p>
      <router-link to="/login">Go to Login Page</router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AccessDeniedView',
  };
  </script>
  
  <style scoped>
  .access-denied-container {
    text-align: center;
    padding: 20px;
  }
  </style>