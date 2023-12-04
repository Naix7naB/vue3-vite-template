import path from 'node:path'

/**
 * @description 获取项目根路径
 * @returns {string} 根目录路径
 */
function getRootPath() {
    return path.resolve(process.cwd())
}

/**
 * @description 获取项目源码存放路径
 * @returns {string} 源码存放路径
 */
function getSrcPath(srcDir = 'src') {
    return path.resolve(getRootPath(), srcDir)
}

/**
 * @description 转换vite获取的env变量
 * @param {object} env env变量对象
 * @returns {object} 转换后的env对象
 */
function convertEnv(env) {
    const result = {}
    if (!env) return result

    Object.entries(env).forEach(([key, val]) => {
        if (key === 'VITE_PORT')
            val = +val

        if (['true', 'false'].includes(val))
            val = val === 'true'

        result[key] = val
    })

    return result
}

export { getRootPath, getSrcPath, convertEnv }
