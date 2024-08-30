<template>
  <div class="about">
    <h2>About Page</h2>
    <p>Welcome, you are logged in!</p>
    <button @click="handleLogout">Logout</button>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';

export default {
  name: 'AboutView',
  setup() {
    const router = useRouter();

    const handleLogout = () => {
      localStorage.removeItem('isAuthenticated');
      router.push({ name: 'Login' });
    };

    return {
      handleLogout,
    };
  },
};
</script>

<style>
.about {
  align-items: center;
  text-align: center;
}
</style>
