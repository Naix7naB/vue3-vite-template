/** 样式引入 */
import 'uno.css'
import 'assets/styles/normalize.css'

import { createApp } from 'vue'
import { setupRouter } from '@/router'

import App from './App.vue'

const app = createApp(App)

setupRouter(app)

app.mount('#app')
