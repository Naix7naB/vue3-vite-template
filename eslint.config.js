import antfu from '@antfu/eslint-config'

export default await antfu({
    vue: true, // 根据依赖自动检测是否开启, 也可以显示手动开启
    stylistic: {
        indent: 4, // 缩进4空格
        semi: false, // 不加分号
        quotes: 'single', // 使用单引号
    },
})
