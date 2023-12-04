import { defineConfig } from 'vite'
import VuePlugin from '@vitejs/plugin-vue'

export default defineConfig({
    build: {
        outDir: 'dist',
        assetsDir: 'assets'
    },
    plugins: [VuePlugin()],
    resolve: {
        alias: {
            '@': './src'
        }
    }
})
