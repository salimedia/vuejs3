import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Blog from '../views/blog'
import Show from '../views/blog/Show.vue'
import NotFound from '../views/404.vue'
import Create from '../views/blog/create.vue'
import Edit from '../views/blog/edit.vue'

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
            // redirect: 'Blog'
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/new',
        name: 'Create',
        component: Create
    },
    {
        path: '/edit/:id',
        name: 'Edit',
        component: Edit,
        props: true
    },
    {
        path: '/Blog/:id/:slug',
        name: 'post-show',
        component: Show,
        props: true
    },
    {
        path: '/posts',
        redirect: 'Blog'
    },
    {
        path: '/Blog',
        name: 'Blog',
        component: Blog
    },
    {
        path: '/:catchAll(.*)',
        component: NotFound
    }

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router