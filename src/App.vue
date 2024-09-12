<script setup>
import { RouterView } from 'vue-router'
import TheHeader from './components/TheHeader.vue'
import TheFooter from './components/TheFooter.vue'
</script>

<template>
  <header>
    <TheHeader />
  </header>
  <main>
    <RouterView />
  </main>
  <footer>
    <TheFooter />
  </footer>
</template>


<style>

body {
  font-family: 'Kalam', 'arial';
  margin: 0;
  padding: 0;
  background-color: #F4D4D4;
}

.tittle{
  color: #DD5981;
  margin: 25px;
  text-align: center;
  font-size: 40px;
}

.subtittle{
  color: #DD5981;
  margin: 25px;
  text-align: center;
  font-size: 25px;
}

</style>