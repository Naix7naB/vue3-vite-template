import Vue from '@vitejs/plugin-vue'

/**
 * unocss插件，原子css
 * https://github.com/antfu/unocss
 */
import UnoCss from 'unocss/vite'

function useVitePlugin() {
    return [Vue(), UnoCss()]
}

export { useVitePlugin }
