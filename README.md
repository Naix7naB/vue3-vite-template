# vue3-vite-template

[![code style](https://antfu.me/badge-code-style.svg)](https://github.com/antfu/eslint-config)

> 基于 vue3+vite+pinia+unocss 的开发模板
>
> 用 husky+commitlint+commitizen+eslint+lint-staged 规范编码风格以及提交信息

## 使用

### 安装

拉取项目到本地
```shell
git clone https://github.com/Naix7naB/vue3-vite-template.git
```

安装项目依赖
```shell
pnpm install
```

### 项目主要依赖

- **开发类**
    - [vue3](https://vuejs.org/)
    - [pinia](https://pinia.vuejs.org/)
    - [unocss](https://unocss.dev/) (可选)

- **工具类**
    - [vite](https://vitejs.dev/)
    - [husky](https://typicode.github.io/husky/)
    - [commitlint](https://commitlint.js.org/)
    - [commitlint-config-gitmoji](https://github.com/arvinxx/gitmoji-commit-workflow/tree/master/packages/commitlint-config) (可选)
    - [commitizen](https://commitizen-tools.github.io/commitizen/)
    - [cz-git](https://cz-git.qbb.sh/) (可选)
    - [eslint](https://eslint.org/)
    - [@antfu/eslint-config](https://github.com/antfu/eslint-config) (可选)
    - [lint-staged](https://github.com/lint-staged/lint-staged)

## 配置

### UnoCss

在项目根目录中找到uno.config.js文件, 可以在该文件中修改UnoCss的配置, 包括 `preset(预设)` `theme(主题)` 等配置, [详细配置](https://unocss.dev/guide/config-file)可以查看[UnoCss官网](https://unocss.dev/)

如果项目中不需要使用UnoCss, 将他删除即可

1. 移除UnoCss依赖
```shell
pnpm remove -D unocss
```

2. 删除vite中的UnoCss插件
```js
// ./build/plugin/index.js
// ...
import UnoCss from 'unocss/vite' // 删除unocss引入

function useVitePlugin() {
    const plugins = [otherPlugin, UnoCss()] // 将UnoCss插件删除
    // ...
    return plugins
}
// ...
```

### ESLint

> [!IMPORTANT]
> 此项目使用了[@antfu/eslint-config](https://github.com/antfu/eslint-config)预设模板来配置ESLint规则, 并且使用[ESLint Flat Config](https://eslint.org/docs/latest/use/configure/configuration-files-new)
>
> 如果您对[ESLint Flat Config](https://eslint.org/docs/latest/use/configure/configuration-files-new)还不了解可以去[ESLint官网](https://eslint.org/)查看详情

在项目根目录中找到eslint.config.js文件, 通过修改该文件使用自定义的eslint规则, 这是[ESLint Flat Config](https://eslint.org/docs/latest/use/configure/configuration-files-new)最新支持的ESLint配置文件 *(原文: The ESLint configuration file is named `eslint.config.js`. It should be placed in the root directory of your project and export an array of configuration objects.)*.

当然, 您仍然可以使用原来的.eslintrc.js等配置文件, 但是并不推荐, 原因是ESLint官方声明将在v9.0.0以及之后的版本弃用这些规则 *(原文: The config system shared on this page is currently the default but will be **deprecated** in `v9.0.0`.)*

如果只希望使用ESLint的基础检查规则, 你可以将相关依赖删除, 只保留ESLint依赖包即可, 随后修改ESLint的配置文件

```shell
pnpm remove -D @antfu/eslint-config
```

### Commitlint

项目使用commitlint来检查git commit的信息是否规范, 在项目根目录中找到commitlint.config.js文件, 修改文件内容自定义commit规范, 相关配置可以去[commitlint官网](https://commitlint.js.org/)查看详情

可以发现, 在package.json中有个commitlin-config-gitmoji的依赖包, 这个包的作用只是让commitlint支持commit信息中使用emoji表情, 如果您在commit信息中不需要使用emoji表情, 删除并修改配置即可

1. 删除commitlint-config-gitmoji依赖
```shell
pnpm remove -D commitlint-config-gitmoji
```

2. 修改commitlint配置
```js
// commitlint.config.js
export default {
    prompt: {
        // ...
        useEmoji: true // false即不开启emoji功能
    }
}
```


### commitizen

使用commitizen这个依赖包主要是能够与控制台交互, 然后生成规范的commit信息, 如果不需要此功能, 忽略即可

可以看到package.json中, 有个config字段, 配置了commitizen使用cz-git这个依赖库来生成commit信息, 如果不需要cz-git来配合使用, 将下列配置项删除即可

```jsonc
{
    // package.json
    // ...
    "config": {
        "commitizen": {
            "path": "node_modules/cz-git"
        }
    }
    // ...
}
```

cz-git官方与commitlint进行了联动, 所以可以将cz-git的配置直接编写在commitlint.config.js的文件中, 如果需要修改cz-git的配置内容直接在commit.config.js文件中修改即可, 相关配置可以去[cz-git官网](https://cz-git.qbb.sh/)查看详情

## 许可协议

[MIT](./LICENSE)
