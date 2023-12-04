import antfu from '@antfu/eslint-config'

export default await antfu({
    vue: true, // 根据依赖自动检测是否开启, 也可以显示手动开启
    stylistic: {
        indent: 4, // 缩进4空格
        semi: false, // 不加分号
        quotes: 'single' // 使用单引号
    },
    rules: {
        'no-console': ['warn'],
        'node/prefer-global/process': ['error', 'always'],
        'style/arrow-parens': ['error', 'as-needed'],
        'style/brace-style': ['error', 'stroustrup', { allowSingleLine: true }],
        'style/comma-dangle': ['error', 'never'],
        'style/eol-last': ['warn', 'always'],
        'style/function-paren-newline': ['warn', { minItems: 7 }],
        'style/indent': ['error', 4]
    }
})
