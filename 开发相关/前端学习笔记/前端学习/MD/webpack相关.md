[toc]

### 引

#### 为什么打包？

1. 体积小（Tree-Shaking、压缩、合并），加载更快
2. 编译高级语言或语法
3. 兼容性和错误检查
4. 统一、高效的开发环境
5. 统一的构建流程和产出标准
6. 集成公司构建规范（提测、上线等）

#### loader 什么？

1. loader 模块转换器

#### plugin

### webpack

#### 基本配置

##### 拆分配置和 merge

`const { merge } = require('webpack-merge')`

##### css 配置

在 rules 中配置 loader
loader 加载顺序 从后往前 从右往左
webpack 不认识 css 文件，使用 css-loader 解析为 css。style-loader 解析出来的 css 放在了 html 的<style></style>中。

babel-loader 处理 es5 es6

postcss-loader 第一个就是前面提到的把 CSS 解析成 JavaScript 可以操作的 抽象语法树结构（Abstract Syntax Tree，AST），第二个就是调用插件来处理 AST 并得到结果。

postcsss.config.js 文件中

```
module.exports = {
    plugins: [require('autoprefixer')]
}
```

autoprefixer 自动增加浏览器兼容性前缀

##### 处理图片

dev 中

```
rules: [
    // 直接引入图片 url
    {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: 'file-loader'
    }
]
```

prod 中
5kb 以内使用 base64 减少请求

```
rules: [
    // 图片 - 考虑 base64 编码的情况
    {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: {
            loader: 'url-loader',
            options: {
                // 小于 5kb 的图片用 base64 格式产出
                // 否则，依然延用 file-loader 的形式，产出 url 格式
                limit: 5 * 1024,

                // 打包到 img 目录下
                outputPath: '/img1/',

                // 设置图片的 cdn 地址（也可以统一在外面的 output 中设置，那将作用于所有静态资源）
                // publicPath: 'http://cdn.abc.com'
            }
        }
    },
]
```

##### 生产文件命名

css js 文件都使用 hash 命名
filename: 'bundle.[contentHash:8].js', // 打包代码时，加上 hash 戳
主要就是为了命中缓存。

webpack 默认支持模块化

```
plugins: [
    new CleanWebpackPlugin(), // 会默认清空 output.path 文件夹 清空 dist
]
```

#### 高级配置

##### 多入口

多入口配置：做活动页，如果一个活动页创建一个项目，创建项目的流程浪费时间，最后只输入一个页面。做成多页面配置，输出多个页面即可。将公共部分抽离出来，进行引用

```
entry: {
    index: path.join(srcPath, 'index.js'),
    other: path.join(srcPath, 'other.js')
},
```

```
plugins: [
    // 多入口 - 生成 index.html
    new HtmlWebpackPlugin({
        template: path.join(srcPath, 'index.html'),
        filename: 'index.html',
        // chunks 表示该页面要引用哪些 chunk （即上面的 index 和 other），默认全部引用
        chunks: ['index'],  // 只引用 index.js 如果对js做了优化，chunks: ['index', 'vendor', 'common']
        hash: true, // 为js文件增加后缀，防止有缓存
            minify: {
            removeAttributeQuotes: true, //去除引号
            removeComments: true, //去除注释
            collapseWhitespace: true // 代码折叠去除空格，因为去除注释之后，会留下一个空行
        }
    }),
    // 多入口 - 生成 other.html
    new HtmlWebpackPlugin({
        template: path.join(srcPath, 'other.html'),
        filename: 'other.html',
        chunks: ['other'],  // 只引用 other.js
        hash: true, // 为js文件增加后缀，防止有缓存
            minify: {
            removeAttributeQuotes: true, //去除引号
            removeComments: true, //去除注释
            collapseWhitespace: true // 代码折叠去除空格，因为去除注释之后，会留下一个空行
        }
    })
]
```

```
output: {
    // filename: 'bundle.[contentHash:8].js',  // 打包代码时，加上 hash 戳
    filename: '[name].[contentHash:8].js', // name 即多入口时 entry 的 key
    path: distPath,
    // publicPath: 'http://cdn.abc.com'  // 修改所有静态文件 url 的前缀（如 cdn 域名），这里暂时用不到
},
```

##### 产出 lib

```
output: {
    filename: 'loadash.js',
    path: distPath,
    library: 'lodash',
}
```

##### css 文件抽离 压缩

开发环境不需要压缩 css
mini-css-extract-plugin 抽离 css 到单独文件

生产环境

```
rules: [
    // 抽离 css
    {
        test: /\.css$/,
        loader: [
            MiniCssExtractPlugin.loader,  // 注意，这里不再用 style-loader
            'css-loader',
            'postcss-loader'
        ]
    },
    // 抽离 less --> css
    {
        test: /\.less$/,
        loader: [
            MiniCssExtractPlugin.loader,  // 注意，这里不再用 style-loader
            'css-loader',
            'less-loader',
            'postcss-loader'
        ]
    }
]
```

```
plugins: [
    new MiniCssExtractPlugin({
        filename: 'css/main.[contentHash:8].css'
    })
],

```

压缩 css 文件的插件：optimize-css-assets-webpack-plugin

```
optimization: {
    // 压缩 css js
    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
}
```

##### 抽离公共部分和第三方单独打包 js

```
optimization: {
    // 压缩 css js
    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],

    // 分割代码块
    splitChunks: {
        chunks: 'all',
        /**
            *
            initial 入口 chunk，对于异步导入的文件不处理
            async 异步 chunk，只对异步导入的文件处理
            all 全部 chunk
            */

        // 缓存分组
        cacheGroups: {
            // 第三方模块
            vendor: {
                name: 'vendor', // chunk 名称
                priority: 1, // 权限更高，优先抽离，重要！！！
                test: /node_modules/,
                minSize: 5,  // 大小限制
                minChunks: 1  // 最少复用过几次
            },

            // 公共的模块
            common: {
                name: 'common', // chunk 名称
                priority: 0, // 优先级
                minSize: 0,  // 公共模块的大小限制
                minChunks: 2  // 公共模块最少复用过几次
            }
        }
    }
```

```
plugins: [
    // 多入口 - 生成 index.html
    new HtmlWebpackPlugin({
        template: path.join(srcPath, 'index.html'),
        filename: 'index.html',
        // chunks 表示该页面要引用哪些 chunk （即上面的 index 和 other），默认全部引用
        chunks: ['index', 'vendor', 'common']  // 要考虑代码分割
    }),
    // 多入口 - 生成 other.html
    new HtmlWebpackPlugin({
        template: path.join(srcPath, 'other.html'),
        filename: 'other.html',
        chunks: ['other', 'vendor', 'common']  // 考虑代码分割
    })
]
```

##### 异步加载 JS

```
setTimeout(() => {
    import('需要异步引入的js文件路径').then(rest => {
        console.log(res.default.message)
    })
}, 1500)
```

##### 处理 vue

```
rules: [
    test: /\.vue$/,
    loader: ['vue-loader'],
    include: srcPath
]
```

#### module chunck bundle

webpack 中一切皆模块 module，可以引用（import）的，能被分析的都是模块 module：.js .sass .png .jpg。
webpack 分析过程中，将多模块合并成的是 chunck。如：entry, import(), splitChunk
bundle 是最终输入的文件.js .css .jpg .png。

#### 优化构建速度

##### 优化 babel-loader

```
{
    test: /\.js$/,
    use: ['babel-loader?cacheDirectory'], // 开启缓存
    include: path.resolve(__dirname, 'src'), // 明确范围
}
```

##### IgnorePlugin

[忽略 moment 的本地化内容](https://www.webpackjs.com/plugins/ignore-plugin/)

##### noParse

不去解析属性值代表的库的依赖

##### happyPack 多进程打包

JS 单线程，开启多进程打包。提高构建速度。

```
rules: [
    // js
    {
        test: /\.js$/,
        // 把对 .js 文件的处理转交给 id 为 babel 的 HappyPack 实例
        use: ['happypack/loader?id=babel'],
        include: srcPath,
        // exclude: /node_modules/
    },
]
```

```
plugins: [
    // happyPack 开启多进程打包
    new HappyPack({
        // 用唯一的标识符 id 来代表当前的 HappyPack 是用来处理一类特定的文件
        id: 'babel',
        // 如何处理 .js 文件，用法和 Loader 配置中一样
        loaders: ['babel-loader?cacheDirectory']
    }),
]
```

##### webpack-parallel-uglify-plugin 多进程压缩 JS

webpack 内置 Uglify(单线程) 工具压缩 JS。使用 webpack-parallel-uglify-plugin 开启多进程压缩。

```
plugins: [
// 使用 ParallelUglifyPlugin 并行压缩输出的 JS 代码
    new ParallelUglifyPlugin({
        // 传递给 UglifyJS 的参数
        // （还是使用 UglifyJS 压缩，只不过帮助开启了多进程）
        uglifyJS: {
            output: {
                beautify: false, // 最紧凑的输出
                comments: false, // 删除所有的注释
            },
            compress: {
                // 删除所有的 `console` 语句，可以兼容ie浏览器
                drop_console: true,
                // 内嵌定义了但是只用到一次的变量
                collapse_vars: true,
                // 提取出出现多次但是没有定义成变量去引用的静态值
                reduce_vars: true,
            }
        }
    })
]
```

##### 自动刷新 使用了 devServer 自动刷新关闭

自动刷新整个网页全部刷新，速度比较慢，状态会丢失，输入框输入的内容会清空...

```
watch: true, // 开启监听，默认为 false
```

##### 热更新

新代码生效，网页不刷新，状态不丢失...
引用 webpack 中的插件
const HotModuleReplacementPlugin = require('webpack/lib/HotModuleReplacementPlugin');

```
entry: {
    // index: path.join(srcPath, 'index.js'),
    index: [
        'webpack-dev-server/client?http://localhost:8080/', // http://localhost:8080/ 对应到自己项目
        'webpack/hot/dev-server',
        path.join(srcPath, 'index.js')
    ],
    other: path.join(srcPath, 'other.js')
},
```

```
devServer: {
    hot: true,
}
```

```
// 增加，开启热更新之后的代码逻辑
if (module.hot) {
    module.hot.accept(['./math'], () => {
        const sumRes = sum(10, 30)
        console.log('sumRes in hot', sumRes)
    })
}
```

##### DllPlugin 动态链接库插件

webpack 内置 DllPlugin
DllPlugin 打包出 dll 文件
DllReferencePlugin 使用 dll 文件

#### 优化产出代码

1. 小图片 base64 编码
2. bundle 加 hash 根据文件内容计算出 hash
3. 懒加载 import 语法
4. 提取公共代码
5. IngnorePlugin 忽略第三方包指定目录，让这些指定目录不要被打包进去
6. 使用 CDN 加速 js css 文件上传到 CDN 服务上
7. 使用 production 不用做任何配置 自动压缩代码
8. 使用 Scope Hosting 多函数内容放到一个文件内 代码体积小 创建函数作用域小
   webpack 内置插件 `ModuleConcatenationPlugin`

   ```
   const ModuleConcatenationPlugin = require('webpack/lib/optimize/ModuleConcatenationPlugin')

   module.exports = {
       resolve: {
           // 针对npm中的第三方模块优先采用jsnext:main中指向的ES6模块化语法的文件
           mainFilds: ['jsnext:main', 'browser', 'main']
       },
       plugins: [
           // 开启Scope Hosting
           new ModuleConcatenationPlugin(),
       ]
   }
   ```

9. tree-shaking 没有使用的 ES6 Module 代码不打包（Commonjs 的过滤不了）

##### ES6 Module 和 Commonjs

> ES6 Module 静态引入，编译时引入 Commonjs 动态引入，执行时引入

#### babel

1. 只管解析 es5 es6 语法，语法都是正确的，只是有的浏览器不支持。通过 babel-polyfill 使浏览器都支持
2. 不处理模块化

##### 环境搭建与基本配置

1. babel-polyfill
   补丁。

   core-js 集成了新语法的 polyfill（补丁）
   regenerator 支持 regenerator 语法

   babel-polyfill 是 core-js 和 regenerator 集合

   Babel7.4 之后启用 babel-polyfill 推荐直接使用 core-js 和 regenerator

   babel-polyfill 会污染全局环境

2. babel-runtime
   不污染全局环境，开发库的话使用 babel-runtime
   需要 @babel/plugin-transform-runtime 和@babel/runtime

   ```
   {
    "presets": [],
    "plugins": [
        [
            "@babel/plugin-transform-runtime",
            {
                "absoluteRuntime":false,
                "corejs":3,
                "helpers":true,
                "regenerator":true,
                "useESModules":false
            }
        ]
    ]
   }
   ```

3. 环境搭建

4. .babelrc 配置

   preset-env 是常用 plugin 集合，如果还不满足在 plugins 扩展。
   preset-env：flow react typescript

按需引入配置，不需要再引入 babel-polyfill

```

{
"presets": [
"@babel/preset-env",
{
"useBuiltIns": "usage",
"corejs": 3
}
],
"plugins": []
}

```

5. presets 和 plugins

```

```
