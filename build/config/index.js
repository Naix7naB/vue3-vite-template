const ASSETS_DIR = 'assets'
const OUTPUT_DIR = 'dist'
const PUBLIC_DIR = 'public'

const PROXY_CONFIG = {
    /**
     * @description 替换代理路径
     * @type {import('vite').ProxyOptions}
     */
    '/api': {
        target: 'http://127.0.0.1:8888',
        changeOrigin: true,
        proxyTimeout: 10 * 1000,
        rewrite: path => path.replace(/^\/api/, '')
    }
}

export { ASSETS_DIR, OUTPUT_DIR, PUBLIC_DIR, PROXY_CONFIG }
