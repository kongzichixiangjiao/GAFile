## SASS

##### VSCode 安装 SASS 插件

Sass 和 Live Sass Compiler

##### 终端安装

`npm install --save-dev node-sass sass-loader`

webpack 已经在 build/utils.js 中配置

```
return {
    css: generateLoaders(),
    postcss: generateLoaders(),
    less: generateLoaders('less'),
    sass: generateLoaders('sass', {
      indentedSyntax: true
    }),
    scss: generateLoaders('sass'),
    stylus: generateLoaders('stylus'),
    styl: generateLoaders('stylus')
  }
```
