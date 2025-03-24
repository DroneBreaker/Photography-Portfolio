<template>
    <header class="top-0 left-0 w-full z-50">
        <div class="p-4 mx-auto flex justify-around items-center">
            <Camera class="w-8 md:w-7 h-8 md:h-7 mt-1"/>

            <h3 class="px-4">
                <a href="/" class="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500 font-medium text-4xl md:text-2xl">
                    LensArt Media
                </a>
            </h3>

            <nav class="hidden md:flex ml-[40%] md:ml-[50%] lg:ml-[60%] p-1">
                <!-- Navigation links -->
                <RouterLink to="/" class="mx-4">Home</RouterLink>

                <RouterLink to="/about" class="mx-4">About</RouterLink>

                <RouterLink to="/contact">Contact</RouterLink>
            </nav>

            <!-- Mobile Menu -->
            <!-- Mobile Menu Button -->
            <div class="md:hidden flex items-center">
                <button @click="toggleMenu" class="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                    <svg v-if="!isMenuOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>

                    <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        
            <!-- Mobile Navigation -->
            <div 
            v-if="isMenuOpen" 
            class="md:hidden bg-white shadow-lg absolute w-full"
            >
                <div class="container mx-4 flex flex-col space-y-2 mt-16">
                    <RouterLink to="/" class="font-medium py-2 hover:text-primary transition-colors" @click="closeMenu">Home</RouterLink>
                    <RouterLink to="/about" class="font-medium py-2 hover:text-primary transition-colors" @click="closeMenu">About</RouterLink>
                    <RouterLink to="/contact" class="font-medium py-2 hover:text-primary transition-colors" @click="closeMenu">Contact</RouterLink>
                </div>
            </div>
        </div>
    </header>
</template>

<script setup>
/**
 * Imports
 */
import { Camera } from 'lucide-vue-next'
import { ref } from 'vue'

/**
 * Computed properties
 */
const isMenuOpen = ref(false)
const isScrolled = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<style lang="scss" scoped>

</style>