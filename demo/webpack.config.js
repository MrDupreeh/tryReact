const path = require('path');

// 使用插件自动生成index.html,自动添加js脚本的引入
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode:'development',
    entry: './src/index.js',
    output: {
        filename:'main.js',
        path:path.resolve(__dirname,'dist')
    },
    plugins:[
        new HtmlWebpackPlugin({
            // title:'学习react',
            template:'./index.html'
        })
    ]
}