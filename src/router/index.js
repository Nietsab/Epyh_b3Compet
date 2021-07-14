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
        path: '/personnalshopper',
        name: 'personnalshopper',
        components: {
            default: () => import('../views/PersonnalShopper.vue'),
        }
    },
    {
        path: '/actus',
        name: 'actus',
        components: {
            default: () => import('../views/Actu.vue'),
        }
    },
    {
        path: '/actus/:intro',
        name: 'Actus_content',
        components: {
            default: () => import('../views/Actu_content.vue'),
        }
    },
    {
        path: '/podcast',
        name: 'podcast',
        components: {
            default: () => import('../views/Podcast.vue'),
        }
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router;