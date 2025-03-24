<template>
    <div class="grid grid-cols-1 md:grid-cols-2">
        <div>
            <h1 class="text-2xl p-12 text-center">{{ About }}</h1>
        </div>

        <div> 
            <img :src="Derick" alt="" class="h-[38rem] mx-[10%] w-[80%] rounded-xl">
        </div>
    </div>
</template>

<script setup>
import Derick from '/assets/derick.jpg'

/**
 * PROPS
 */
    const props = defineProps({
        About: {
            type: String,
            required: true,
            default: `Hi, I'm Derick, a passionate photographer dedicated to capturing life’s most authentic moments. 
            With a keen eye for detail and a love for storytelling, I specialize in portrait, 
            wedding, landscape, fashion, and bringing emotions and narratives to life through my lens.
            Over the years, I’ve refined my craft, blending creativity with technical precision 
            to deliver stunning, high-quality images that resonate. Whether it’s a heartfelt wedding, a captivating portrait, or 
            a breathtaking landscape, my goal is to create visuals that evoke emotion and preserve memories for a lifetime. Let’s 
            collaborate and turn your moments into timeless works of art.`
        }
    })
</script>

<style lang="scss" scoped>

</style>