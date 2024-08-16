<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import JSON from './components/JSON.vue'
import Form from './components/Form.vue';
</script>

<template>
<Form />
  <!-- <TheWelcome /> -->
  <!-- <JSON></JSON> -->
  <!-- <div class="form">
  <h1>User Information Form / Credentials</h1>
      <! <form>
          <label for="username">Username:</label><br>
          <input type="text" id="username" name="username"><br>
          
          <label for="password">Password:</label><br>
          <input type="password" id="password" name="password"><br>
          
          <label for="isAustralian">Australian Resident?</label><br>
          <input type="checkbox" id="isAustralian" name="isAustralian"><br>
          
          <label for="reason">Reason For Joining:</label><br>
          <textarea id="reason" name="reason" rows="3"></textarea><br>
          
          <label for="gender">Gender</label><br>
          <select id="gender">
              <option value="female">Female</option>
              <option value="male">Male</option>
              <option value="other">Other</option>
          </select>
      </form> -->
  <!-- </div> --> 
  
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
