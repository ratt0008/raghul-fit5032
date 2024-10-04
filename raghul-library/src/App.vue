<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';  // Import the useRoute hook
import BHeader from './components/BHeader.vue';
import CountBookAPI from "./views/CountBookAPI.vue";

// Use the route to determine whether to show the header
const route = useRoute();
const showHeader = computed(() => route.name !== 'CountBookAPI'); 
</script>

<template>
  <!-- Conditionally show BHeader based on the route -->
  <header v-if="showHeader">
    <BHeader />
  </header>

  <main class="container mt-12">
    <!-- Router view to render components based on the route -->
    <router-view></router-view>
  </main>
</template>

<style>
@import 'primeicons/primeicons.css';

.container {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  max-width: 80vw;
  margin: 0 auto;
  padding: 20px;
  border-radius: 10px;
}
</style>
