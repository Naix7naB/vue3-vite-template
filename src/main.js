/** 样式引入 */
import 'uno.css'
import 'assets/styles/normalize.css'

import { createApp } from 'vue'

import { setupRouter } from '@/router'
import { setupStore } from '@/store'

import App from './App.vue'

const app = createApp(App)

setupRouter(app) // 设置router
setupStore(app) // 设置store

app.mount('#app') // 挂载组件
