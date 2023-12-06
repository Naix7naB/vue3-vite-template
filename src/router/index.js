import { createRouter, createWebHashHistory } from 'vue-router'

/** @type {import('vue-router').RouteRecordRaw} */
const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/home/index.vue')
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('@/views/about/index.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

/**
 * @description 设置router
 * @param {import('vue').App} app 主程序
 */
function setupRouter(app) {
    app.use(router)
}

export { router, setupRouter }
