<script setup>
import { RouterView } from 'vue-router'
import TheHeader from './components/TheHeader.vue'
</script>

<template>
  <header>
    <TheHeader />
  </header>
  <RouterView />
</template>


<style>

body {
  font-family: 'Kalam', 'arial';
  margin: 0;
  padding: 0;
}

</style>