/**
 * @description custom commit scope | 自定义提交范围
 * @returns {Array<{name: string, value: string}>}
 */
function getCustomScopes() {
    return [
        ['projects', '项目搭建'],
        ['components', '组件相关'],
        ['utils', 'utils 相关'],
        ['styles', '代码风格/样式'],
        ['deps', '项目依赖'],
        ['other', '其他修改']
    ].map(([value, description]) => {
        return {
            value,
            name: `${value.padEnd(5)} (${description})`
        }
    })
}

/** @type {import('cz-git').UserConfig} */
module.exports = {
    extends: ['gitmoji'],
    rules: {
        'body-leading-blank': [1, 'always'],
        'body-max-line-length': [2, 'always', 100],
        'footer-leading-blank': [1, 'always'],
        'footer-max-line-length': [2, 'always', 100],
        'type-enum': [2, 'always', [
            'wip',
            'feat',
            'fix',
            'style',
            'perf',
            'refactor',
            'ci',
            'revert',
            'build',
            'chore',
            'test',
            'docs',
            'release',
            'init',
        ]]
    },
    prompt: {
        messages: {
            type: '选择你要提交的类型 :',
            scope: '选择一个提交范围 :',
            subject: '填写简短精炼的变更描述 :\n',
            body: '填写更加详细的变更描述『可选』。使用 "|" 换行 :\n',
            breaking: '列举非兼容性重大的变更『可选』。使用 "|" 换行 :\n',
            footer: '列举关联issue『可选』 例如: #31, #I3244 :\n',
            confirmCommit: '是否用以上信息进行提交?'
        },
        types: [
            { value: 'wip', name: '🚧  Work in Progress | 开发中', emoji: ':construction:' },
            { value: 'feat', name: '✨  New Features | 新功能', emoji: ':sparkles:' },
            { value: 'fix', name: '🐛  Bug Fixes | 修复', emoji: ':bug:' },
            { value: 'style', name: '🎨  Coding Styles | 代码风格/样式', emoji: ':art:' },
            { value: 'perf', name: '⚡  Improve Performance | 性能优化', emoji: ':zap:' },
            { value: 'refactor', name: '♻️  Code Refactoring | 代码重构', emoji: ':recycle:' },
            { value: 'ci', name: '👷  Fix CI Build | CI 配置', emoji: ':construction_worker:' },
            { value: 'revert', name: '⏪  Revert | 回退', emoji: ':rewind:' },
            { value: 'build', name: '📦  Build System | 打包构建', emoji: ':package:' },
            { value: 'chore', name: '🔨  Chore | 构建/工程依赖/工具', emoji: ':hammer:' },
            { value: 'test', name: '✅  Tests | 测试', emoji: ':white_check_mark:' },
            { value: 'docs', name: '📝  Documentation | 文档变更', emoji: ':memo:' },
            { value: 'release', name: '🔖  Release | 发布版本', emoji: ':bookmark:' },
            { value: 'init', name: '🎉  Init | 初始化', emoji: ':tada:' },
        ],
        scopes: getCustomScopes(),
        skipQuestions: ['footerPrefix', 'footer'], // 忽略的步骤
        allowCustomScopes: false, // 不允许自定义提交范围
        allowEmptyScopes: false, // 不允许空的提交范围
        useEmoji: true,
        emojiAlign: 'left'
    }
}