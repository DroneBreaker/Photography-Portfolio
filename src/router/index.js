import { createRouter, createWebHistory } from "vue-router";

import Home from "@/views/Home.vue";
import About from "../views/About.vue";
import NotFound from "@/views/NotFound.vue";
import Contact from "@/views/Contact.vue";

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/contact', component: Contact },
    { path: '/:catchAll(.*)', component: NotFound }, // catch-all route
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;