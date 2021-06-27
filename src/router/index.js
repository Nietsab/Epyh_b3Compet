import Vue from 'vue';
import VueRouter from 'vue-router'
import VueMeta from 'vue-meta'

Vue.use(VueRouter)
Vue.use(VueMeta)

const routes = [
    {
        path: '/',
        name: 'home',
        components: {
            default: () => import('../views/Home.vue'),
        }
    },
    {
        path: '/mentionLegales',
        name: 'mentionlegales',
        components: {
            default: () => import('../views/Mention.vue'),
        }
    },
    {
        path: '/player',
        name: 'player',
        components: {
            default: () => import('../views/Player.vue'),
        }
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router;