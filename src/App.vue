<script setup>
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import Gallery from './views/Gallery.vue'
</script>

<template>
  <div class="bg-black min-h-screen text-gray-300">
    <Navbar/>
    <Hero/>
    <Gallery/>

    <RouterView/>
  </div>
</template>

<style scoped>
html, body {
  margin: 0px;
  padding: 0px;
}
</style>
