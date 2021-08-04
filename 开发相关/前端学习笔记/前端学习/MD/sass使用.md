[TOC]

## SASS

#### vue create 创建项目 使用（vue-cli）

##### 首先

如果没有安装 sass-resources-loader 引入 sass 文件相关内容报错如下

```
ERROR Failed to compile with 1 errors 11:02:24 PM

error in ./src/App.vue?vue&type=style&index=0&id=7ba5bd90&lang=scss&scoped=true&

Module build failed (from ./node_modules/sass-loader/dist/cjs.js):
SassError: Undefined variable.
╷
60 │ background-color: $header-bgc;
│ ^^^^^^^^^^^
╵
src/App.vue 60:21 root stylesheet
```

##### 安装 sass-resources-loader

> This loader will load your SASS resources into every required SASS module. So you can use your shared variables, mixins and functions across all SASS styles without manually loading them in each file.
> 翻译成中文就是 在哪个文件都能用 sass

`npm install sass-resources-loader --save-dev`

[npm sass-resources-loader]('https://www.npmjs.com/package/sass-resources-loader')
下面是 vue-cli@3 在 vue.config.js 配置

```
// vue.config.js
module.exports = {
 chainWebpack: (config) => {
        config.resolve.alias
            .set('@', resolve('./src'))
            .set('components', resolve('./src/components'))
            .set('pages', resolve('./src/pages'))
            .set('assets', resolve('./src/assets'))
            .set('utils', resolve('./src/utils'));
        const oneOfsMap = config.module.rule('scss').oneOfs.store
        oneOfsMap.forEach(item => {
            item
                .use('sass-resources-loader')
                .loader('sass-resources-loader')
                .options({
                    resources: './src/assets/scss/index.scss',
                })
                .end()
        })
    },
}
```

##### 又报错

```
INFO  Starting development server...
 ERROR  Error: Cannot find module 'vue-template-compiler/package.json'
Require stack:
- /Users/houjianan/Documents/GitHub/前端学习/Vue/vue-vant/node_modules/@vue/cli-service/lib/config/base.js
- /Users/houjianan/Documents/GitHub/前端学习/Vue/vue-vant/node_modules/@vue/cli-service/lib/Service.js
- /Users/houjianan/Documents/GitHub/前端学习/Vue/vue-vant/node_modules/@vue/cli-service/bin/vue-cli-service.js
Error: Cannot find module 'vue-template-compiler/package.json'
```

##### 安装 vue-template-compiler

`npm install vue-template-compiler --save-dev`

> 使用 vue-template-compiler 直接读取处理了.vue 文件 SFC 内容，将.vue 文件处理为一个 AST。

> 在 Vue 的 mount 过程中，template 会被编译成 AST 语法树，AST 是指抽象语法树（abstract syntax tree 或者缩写为 AST），或者语法树（syntax tree），是源代码的抽象语法结构的树状表现形式。

[推荐-vue-loader&vue-template-compiler 详解](https://zhuanlan.zhihu.com/p/114239056)

##### 又报错

```
ERROR  Failed to compile with 2 errors                              11:09:02 PM

Failed to resolve loader: sass-loader
You may need to install it.
Failed to resolve loader: sass-loader
You may need to install it.

```

##### sass-loader

> Loads a Sass/SCSS file and compiles it to CSS.

`npm install sass-loader --save-dev`

##### 又报错

```
 ERROR  Failed to compile with 4 errors                              11:09:40 PM

 error  in ./src/assets/scss/index.scss

Module Error (from ./node_modules/sass-loader/dist/cjs.js):
Cannot find module 'sass'
Require stack:
```

##### 安装 sass

`npm install sass -g`

##### 注意

路径要写正确，不要盲目 bd，盲目安装

---

###### 下方有使用

---

#### vue init webpack 创建项目如下

##### 安装

`npm install sass-loader node-sass style-loader --save-dev`
`npm install style-resources-loader vue-cli-plugin-style-resources-loader -D`

webpack 3.6.0 下安装结果

```
 "sass-loader": "^7.3.1",
 "node-sass": "^4.14.1",
 "style-loader": "^2.0.0",
 "webpack": "^3.6.0",
```

注意版本是否对应

###### utils.js 文件中添加

`scss: generateLoaders('sass'),`

```
exports.cssLoaders = function (options) {
  ...

  // generate loader string to be used with extract text plugin
  function generateLoaders(loader, loaderOptions) ...

  // https://vue-loader.vuejs.org/en/configurations/extract-css.html
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
}
```

##### vue 中使用

```
<style lang="scss">

</style>
```

注意是 sCss

##### index.scss

```
@charset "UTF-8";

@import "reset";
@import "base";
@import "icons";
@import "containers";
@import "tabbar";
```

##### \_base.scss

```
@import "mixins";

body,
button,
input,
select,
textarea {
  color: #5d656b;
  font-size: $font-size-base;
  font-family: -apple-system, BlinkMacSystemFont, "PingFang SC", "Helvetica Neue", STHeiti, "Microsoft Yahei", Tahoma, Simsun, sans-serif;
  line-height: 1;
}

body {
  background-color: #eee;
}

a {
  color: #686868;
  text-decoration: none;

  &:active {
    color: $link-active-color;
  }
}

html,
body {
  overflow: hidden;
  width: 100%;
  height: 100%;
}
```

##### \_icons.scss

```
@import "引入的icon路径";
@import "引入的icon路径";

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```

##### \_mixins.scss

```
@import "variables";

// flex-center
@mixin flex-center($direction: row) {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: $direction;
}

//ellipsis
@mixin ellipsis() {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

//multi line ellipsis
@mixin multiline-ellipsis($num: 2) {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: $num;
  -webkit-box-orient: vertical;
  white-space: normal !important;
  word-wrap: break-word;
}
```

##### \_reset.scss

```
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
hr,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
input,
button,
select,
textarea,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  box-sizing: border-box;

  padding: 0;
  margin: 0;

  font: inherit;
  font-size: 100%;
  vertical-align: baseline;

  border: none;
  outline: none;

  -webkit-tap-highlight-color: transparent; // 去掉点击对象时默认的灰色半透明覆盖层(iOS)或者虚框(Android)
  -webkit-user-select: none; // 禁止选择文字
}

html {
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%; // 禁止文字自动调整大小(默认情况下旋转设备的时候文字大小会发生变化)
  //-webkit-overflow-scrolling: touch;
  -webkit-font-smoothing: antialiased; // 字体抗锯齿
  -moz-osx-font-smoothing: grayscale;
}

input,
select,
textarea {
  border: none;
  -webkit-appearance: none; // 清除内阴影
  -webkit-user-select: auto !important; // 否则ios下输入框无法输入
}

textarea {
  overflow: auto;
  resize: none;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: 100%;
  font-weight: normal;
}

address,
caption,
cite,
code,
dfn,
th,
var,
i,
em {
  font-style: normal;
}

abbr,
acronym {
  // 去掉firefox下此元素的边框
  border: none;
  font-variant: normal;
}

ul,
ol {
  list-style: none;
}

del {
  text-decoration: line-through;
}

ins,
a {
  text-decoration: none;
}

a,
img {
  -webkit-touch-callout: none; // 禁用长按页面时的弹出菜单(iOS下有效)
}

img {
  border: none;
  /*display: block;*/
  vertical-align: top;
}

table {
  // 去掉各table cell的边距并让其边重合
  border-spacing: 0;
  border-collapse: collapse;
}

blockquote,
q {
  quotes: none;
}

blockquote:before,
blockquote:after,
q:before,
q:after {
  content: '';
}

//统一上标和下标
sub,
sup {
  position: relative;
  font-size: 75%;
  line-height: 0;
  vertical-align: baseline;
}

sup {
  top: -0.5em;
}

sub {
  bottom: -0.25em;
}
```

##### \_variables.scss

```
//color
$icon-color-default: #fff;
$icon-color: #ccc;
$link-active-color: #de181b;
$border-color: #e5e5e5;

//bgc
$bgc-theme: #f5f5f5;
$header-bgc: rgb(222, 24, 27);
$header-bgc-translucent: rgba(222, 24, 27, 0.9);
$modal-bgc: rgba(0, 0, 0, 0.4);

//font size
$font-size-base: 12px;
$font-size-l: $font-size-base+2;
$icon-font-size-sm: 18px;
$icon-font-size: 24px;

//z-index
$navbar-z-index: 1000;
$tabbar-z-index: 1000;
$backtop-z-index: 1100;
$search-z-index: 1200;
$product-z-index: 1200;
$search-popup-z-index: $search-z-index+10;
$category-popup-z-index: $search-z-index - 10;

//size
$navbar-height: 50px;
$tabbar-height: 50px;
```
