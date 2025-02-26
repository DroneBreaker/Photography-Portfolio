import { createRouter, createWebHistory } from "vue-router";

import Hero from "@/components/Hero.vue";
import About from "../views/About.vue";
import NotFound from "@/views/NotFound.vue";

const routes = [
    { path: '/', component: Hero },
    { path: '/about', component: About },
    { path: '*', component: NotFound }, // catch-all route
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;