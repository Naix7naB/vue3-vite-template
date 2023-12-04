import { defineConfig } from 'vite'
import { useVitePlugin } from './build/plugin'
import { getRootPath, getSrcPath } from './build/utils'
import { ASSETS_DIR, OUTPUT_DIR, PUBLIC_DIR } from './build/config'

export default defineConfig(() => {
    const rootPath = getRootPath()
    const srcPath = getSrcPath()

    return {
        root: rootPath,
        publicDir: PUBLIC_DIR,
        build: {
            outDir: OUTPUT_DIR,
            assetsDir: ASSETS_DIR
        },
        plugins: [useVitePlugin()],
        resolve: {
            alias: {
                '~': rootPath,
                '@': srcPath
            }
        }
    }
})
