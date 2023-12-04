import path from 'node:path'
import { defineConfig } from 'vite'
import VuePlugin from '@vitejs/plugin-vue'
import UnoCss from 'unocss/vite'

const resolve = dir => path.resolve(__dirname, dir)

export default defineConfig({
    build: {
        outDir: 'dist',
        assetsDir: 'assets'
    },
    plugins: [VuePlugin(), UnoCss()],
    resolve: {
        alias: {
            '@': resolve('src')
        }
    }
})
