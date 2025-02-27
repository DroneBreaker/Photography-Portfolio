<template>
    <div>
    <!-- Hero -->
        <section class="px-4 p-2 mb-32">
            <h1 class="text-4xl md:text-7xl font-bold text-center mt-[40%] md:mt-[12%] h-36 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-blue-500">
                Capturing Life's Beautiful Moments
            </h1>

            <p class="text-center text-sm md:text-xl max-w-2xl mx-auto"> 
                Professional photographer specializing in nature, urban landscapes, and portrait photography
            </p>
        </section>

        <Gallery/>
    </div>
</template>

<script setup>
import Gallery from '../components/Gallery.vue'
</script>

<style lang="scss" scoped>

</style>