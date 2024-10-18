<template>
  <div class="login-container">
    <h2>Login</h2>
    <form @submit.prevent="handleLogin">
      <div>
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="username" />
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" />
      </div>
      <button type="submit">Login</button>
    </form>
    <p v-if="loginError" class="error">Invalid username or password</p>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
  name: 'LoginView',
  setup() {
    const username = ref('');
    const password = ref('');
    const loginError = ref(false);
    const router = useRouter();

    const handleLogin = () => {
      const hardcodedUsername = 'admin';
      const hardcodedPassword = 'password';
      const hardcodedRole = 'admin';

      if (username.value === hardcodedUsername && password.value === hardcodedPassword) {
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('role', 'admin');
        router.push({ name: 'About' });
      } else {
        loginError.value = true;
      }
    };

    return {
      username,
      password,
      loginError,
      handleLogin,
    };
  },
};
</script>

<style scoped>
.login-container {
  max-width: 300px;
  margin: auto;
  text-align: center;
}
.error {
  color: red;
}
</style>
