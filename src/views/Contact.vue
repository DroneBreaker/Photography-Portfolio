<template>
    <div class="pt-[17%] text-center">
        <h2 class="text-3xl md:text-5xl lg:text-7xl font-bold mb-2">Get In Touch</h2>

        <p class="text-sm md:text-xl mb-4">
            Interested in working together? Let's create something amazing.
        </p>

        <div class="flex justify-center mb-4">
            <a href="mailto:lensartmedia727@gmail.com" class="text-gray-400 hover:text-purple-400 transition-colors">
                <Mail class="w-8 h-8 mx-4"/>
            </a>

            <a href="https://www.instagram.com/lensart.media/" class="text-gray-400 hover:text-purple-400 transition-colors">
                <Instagram class="w-8 h-8 mx-4"/>
            </a>
            
            <a href="https://twitter.com/drakemadeitt" class="text-gray-400 hover:text-purple-400 transition-colors">
                <Twitter class="w-8 h-8 ml-2 mx-4"/>
            </a>

            <a href="callto:+233543591039" class="text-gray-400 hover:text-purple-400 transition-colors">
                <Phone class="w-8 h-8 ml-2" />
            </a>
        </div>
    </div>
</template>

<script setup>
/**
 * Imports
 */
import { Mail, Instagram, Twitter, Phone } from 'lucide-vue-next'
</script>

<style lang="scss" scoped>

</style>