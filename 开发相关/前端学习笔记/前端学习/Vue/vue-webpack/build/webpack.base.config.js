const HtmlWebpackPlugin = require('html-webpack-plugin'); //通过 npm 安装
const webpack = require('webpack'); //访问内置的插件
const path = require('path');
module.exports = {
    module: {
        rules: [
            //     {
            //     // 注意 不要有引号
            //     test: /\.vue$/,
            //     loader: 'vue-loader',
            //     options: vueLoaderConfig
            // },
            // {
            //     test: /\.js$/,
            //     loader: 'babel-loader',
            //     include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client')]
            // },
            // {
            //     test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
            //     loader: 'url-loader',
            //     options: {
            //         limit: 10000,
            //         name: utils.assetsPath('img/[name].[hash:7].[ext]')
            //     }
            // },
            // {
            //     test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
            //     loader: 'url-loader',
            //     options: {
            //         limit: 10000,
            //         name: utils.assetsPath('media/[name].[hash:7].[ext]')
            //     }
            // },
            // {
            //     test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
            //     loader: 'url-loader',
            //     options: {
            //         limit: 10000,
            //         name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
            //     }
            // }
        ],
        plugins: [
            new webpack.ProgressPlugin(),
            new HtmlWebpackPlugin({ template: './src/index.html' })
        ]
    },
}