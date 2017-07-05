## Rollup 简介
Rollup 是一个 JavaScript 模块打包器，可以将小块代码编译成大块复杂的代码，例如 library 或应用程序。

## 链接
- [Rollup.js 官网](http://rollup.org/)
- [Rollup.js 中文文档](https://rollup.bootcss.com/)
- [Rollup 插件列表](https://github.com/rollup/rollup/wiki/Plugins)
- [如何使用Rollup打包样式文件并添加LiveReload](http://www.w3cplus.com/javascript/learn-rollup-css.html)

## 使用
```bash
# 下载代码
$ git clone https://github.com/zhaotoday/rollup.git

# 开发、调试
$ npm run dev

# 构建代码
$ npm run build

# 校验 JS
$ npm run eslint

# 校验 CSS
$ npm run stylelint
```

## 相关包
#### 1. rollup-watch
源文件改变时，自动重新构建。

#### 2. rollup-plugin-node-resolve
指导 Rollup 如何去寻找外部的模块。

#### 3. rollup-plugin-commonjs
当下，大部份 npm 的程序包都被输出为 CommonJS 模块。在 Rollup 处理它们之前，我们都需要将 CommonJS 转成 ES2015。
> 注意 rollup-plugin-commonjs 应该在其它插件变换你的模块之前使用 - 这是为了避免其它插件做了一些改变，而这改变会破坏了 CommonJS 的检测。

#### 4. rollup-plugin-babel
在项目中使用 Babel，可以用上那些未被浏览器和 Node.js 支持的未来的 JavaScript 特性。
```bash
npm install --save-dev rollup-plugin-babel babel-preset-latest babel-plugin-external-helpers
```

#### 5. rollup-plugin-postcss
添加 PostCSS 支持。
```bash
npm install --save-dev rollup-plugin-postcss postcss-simple-vars postcss-nested postcss-cssnext cssnano
```

## 建议
- 建议本地安装 Rollup，因为这样任何人克隆你的项目和运行 npm install 将会得到一个兼容的版本；
 