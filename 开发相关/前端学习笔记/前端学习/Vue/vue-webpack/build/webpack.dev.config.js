const path = require('path');
const { allowedNodeEnvironmentFlags } = require('process');
console.log("开始打测试包");
console.log(__dirname);

module.exports = {
    // webpack --mode=development
    mode: "development", // "production" | "development" | "none"
    // Chosen mode tells webpack to use its built-in optimizations accordingly.
    entry: {
        // 默认为 './src'
        main: "./src/main.js", // string | object | array
        adminApp: './src/adminApp.js',
        one: './src/onePage/index.js',
        two: './src/twoPage/index.js',
    },
    // 这里应用程序开始执行
    // webpack 开始打包
    output: {
        // webpack 如何输出结果的相关选项
        // __dirname == /Users/houjianan/Documents/GitHub/前端学习/Vue/vue-webpack/build
        path: path.resolve(__dirname, "dist"), // string
        // 所有输出文件的目标路径
        // 必须是绝对路径（使用 Node.js 的 path 模块）
        filename: "[name].js", // string
        // 「入口分块(entry chunk)」的文件名模板
        publicPath: "/assets/", // string
        // 输出解析文件的目录，url 相对于 HTML 页面
        library: "MyLibrary", // string,
        // 导出库(exported library)的名称
        libraryTarget: "umd", // 通用模块定义
        // 导出库(exported library)的类型
        /* 高级输出配置（点击显示） */
    },
    module: {
        rules: [
            { test: /\.txt$/, use: 'raw-loader' }
        ]
    },
    plugins: [
        // new HtmlWebpackPlugin({ template: './src/index.html' })
    ]
}

