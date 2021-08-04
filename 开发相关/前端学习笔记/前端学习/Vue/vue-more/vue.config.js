const path = require('path');//引入path模块
const HtmlWebpackPlugin = require('html-webpack-plugin')
function resolve(dir) {
    return path.join(__dirname, dir)//path.join(__dirname)设置绝对路径
}
module.exports = {
    chainWebpack: (config) => {
        config.resolve.alias
            .set('@', resolve('./src'))
            .set('components', resolve('./src/components'))
            .set('pages', resolve('./src/pages'))
            .set('assets', resolve('./src/assets'))
            .set('utils', resolve('./src/utils'))

    },
    runtimeCompiler: true,
    devServer: {
        host: 'localhost',
        port: 8080,
        proxy: {
            '/api': {
                target: 'http://www.imooc.com/api/',
                changeOrigin: true,
                pathRewrite: {
                    '/api': ''
                }
            }
        }
    },
    configureWebpack: {
        plugins: [
            new HtmlWebpackPlugin({  // Also generate a test.html
                filename: 'index.html',
                template: './public/index.html',
                title: process.env.NODE_ENV === 'production'
                    ? '生产环境标题'
                    : '准生产环境标题',
                iconUrl: ""
            })
        ]
    }

}
