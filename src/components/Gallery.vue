<template>
    <section>
        <div class="container mx-auto mb-8">
        <!-- Category Filter -->
            <div class="flex flex-wrap gap-4 justify-center">

            <button
                v-for="category in categories"
                :key="category"
                @click="selectedCategory = category"
                :class="[
                'px-6 py-2 rounded-full transition-colors',
                selectedCategory === category
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-800 hover:bg-gray-700'
                ]"
            >
                {{ category }}
            </button>
            </div>
        </div>

        <!-- Photo Grid -->
        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
            <div 
                v-for="photo in filteredPhotos" 
                :key="photo.id"
                @click="selectedPhoto = photo"
                class="relative group cursor-pointer overflow-hidden rounded-lg mx-4"
            >
                <img :src="photo.url" alt="" class="w-full h-[400px] object-cover transition-transform duration-300 group-hover:scale-105 mb-4 rounded-lg">    
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const photos = [
    { 
        id: 2, 
        url: '/assets/exclusive2.jpg', 
        category: 'Exclusives' 
    },

    { 
        id: 3, 
        url: '/assets/exclusive3.jpg', 
        category: 'Exclusives' 
    },
    { 
        id: 4, 
        url: '/assets/exclusive4.jpg', 
        category: 'Exclusives' 
    },

    { 
        id: 5, 
        url: '/assets/brac1.jpg', 
        category: 'BRAC' 
    },

    { 
        id: 6, 
        url: '/assets/brac2.jpg', 
        category: 'BRAC' 
    },

    { 
        id: 7, 
        url: '/assets/brac3.jpg', 
        category: 'BRAC' 
    },

    { 
        id: 8, 
        url: '/assets/brac4.jpg', 
        category: 'BRAC' 
    },
    //... more photos...  // Add as many photos as needed to populate the array
]

const categories = ['All', ...new Set(photos.map(photo => photo.category))]
const selectedCategory = ref('All');
const selectedPhoto = ref(null);

/**
 * Computed
 */
 const filteredPhotos = computed(() => 
  selectedCategory.value === 'All'
    ? photos
    : photos.filter(photo => photo.category === selectedCategory.value)
);
</script>

<style lang="scss" scoped>

</style>