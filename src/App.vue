<script setup>
import Navbar from './components/Navbar.vue'
import { RouterView } from 'vue-router'

</script>

<template>
  <div class="bg-black min-h-screen text-gray-600">
    <Navbar/>

    <RouterView/>
  </div>
</template>

<style scoped>
html, body {
  margin: 0px;
  padding: 0px;
}
</style>
