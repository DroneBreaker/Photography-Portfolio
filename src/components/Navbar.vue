<template>
    <header>
        <div class="flex p-4">
            <Camera class="w-6 h-6 mt-1"/>
            <h3 class="px-4">
                <a href="/" class="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500 font-medium text-4xl md:text-2xl">
                    Derick Limitless
                </a>
            </h3>

            <nav class="hidden md:flex ml-[50%] md:ml-[50%] lg:ml-[60%] p-1">
                <!-- Navigation links -->
                <a href="/" class="mx-4">
                    <RouterLink>Home</RouterLink>
                </a>

                <a href="/about" class="mx-4">
                    <RouterLink>About</RouterLink>
                </a>

                <a href="/">
                    <RouterLink>Contact</RouterLink>
                </a>
            </nav>
        </div>
    </header>
</template>

<script setup>
import { Camera } from 'lucide-vue-next'
</script>

<style lang="scss" scoped>

</style>