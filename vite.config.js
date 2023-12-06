import { defineConfig, loadEnv } from 'vite'
import { useVitePlugin } from './build/plugin'
import { convertEnv, getRootPath, getSrcPath, resolve } from './build/utils'
import { ASSETS_DIR, ENV_DIR, OUTPUT_DIR, PROXY_CONFIG, PUBLIC_DIR } from './build/config'

export default defineConfig(({ command, mode }) => {
    const isBuild = command === 'build'
    const envVal = convertEnv(loadEnv(mode, ENV_DIR))

    const { VITE_PORT, VITE_USE_PROXY, VITE_BASE_API } = envVal

    return {
        envDir: ENV_DIR,
        publicDir: PUBLIC_DIR,
        resolve: {
            alias: {
                '~': getRootPath(),
                '@': getSrcPath(),
                'assets': resolve('src', 'assets'),
                'comps': resolve('src', 'components')
            }
        },
        plugins: [useVitePlugin(envVal, isBuild)],
        server: {
            host: '127.0.0.1',
            port: VITE_PORT,
            open: false,
            proxy: VITE_USE_PROXY
                ? {
                    [VITE_BASE_API]: PROXY_CONFIG[VITE_BASE_API]
                }
                : undefined
        },
        build: {
            outDir: OUTPUT_DIR,
            assetsDir: ASSETS_DIR
        }
    }
})
