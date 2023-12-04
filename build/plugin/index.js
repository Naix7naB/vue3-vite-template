/* vue插件, 使vite支持vue文件 */
import Vue from '@vitejs/plugin-vue'

/**
 * unocss插件，原子css
 * https://github.com/antfu/unocss
 */
import UnoCss from 'unocss/vite'

/* rollup打包分析插件 */
import Visualizer from 'rollup-plugin-visualizer'

/* 压缩插件 */
import Compress from 'vite-plugin-compression'

/**
 * @description 构建vite插件列表
 * @param {object} envVal 环境变量对象
 * @param {boolean} isBuild 是否为打包环境
 * @returns {import('vite').PluginOption} vite插件
 */
function useVitePlugin(envVal, isBuild) {
    const plugins = [Vue(), UnoCss()]

    /* 根据环境变量来控制是否开启压缩 */
    if (envVal?.VITE_USE_COMPRESS) {
        plugins.push(
            Compress({
                threshold: 10 * 1024, // 超过10KB开启压缩
                algorithm: envVal?.VITE_COMPRESS_TYPE || 'gzip'
            })
        )
    }

    /* 当打包项目时, 开启打包分析工具 */
    if (isBuild) {
        plugins.push(
            Visualizer({
                open: true,
                gzipSize: true,
                brotliSize: true
            })
        )
    }

    return plugins
}

export { useVitePlugin }
