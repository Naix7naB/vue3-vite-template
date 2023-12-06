import { createPinia } from 'pinia'

const store = createPinia()

/**
 * @description 设置store
 * @param {import('vue').App} app 主程序
 */
function setupStore(app) {
    app.use(store)
}

export { setupStore, store }
