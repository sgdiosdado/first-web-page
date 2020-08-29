const   path = require('path'),
        common = require('./webpack.common'),
        HtmlWebpackPlugin = require('html-webpack-plugin'),
        merge = require('webpack-merge');

const config = {
    mode : 'development',
    output: {
        filename : 'main.js',
        path : path.resolve(__dirname, 'dist')
    },
    plugins : [
        new HtmlWebpackPlugin({
            template : './src/template.html'
        })
    ],
    module : {
        rules : [
            {
                test : /\.(scss)$/,
                use : [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    }
};
module.exports = merge(common, config);