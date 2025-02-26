<template>
    <section>
        <div class="container mx-auto">
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
    </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const photos = [
    {
        id: 1,
        url: 'https://images.unsplash.com/photo-1682687220742-aba19b51f9a8',
        category: 'Exclusives',
        description: 'Mountain peaks at sunset'
    },

    { 
        id: 2, 
        url: 'https://images.unsplash.com/photo-1682687220742-aba19b51f9a8', 
        category: 'Portraits' 
    },

    { 
        id: 3, 
        url: 'https://images.unsplash.com/photo-1682687220742-aba19b51f9a8', 
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