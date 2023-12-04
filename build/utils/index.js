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

export { getRootPath, getSrcPath }
