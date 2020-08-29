const   path = require('path'),
        common = require('./webpack.common'),
        merge = require('webpack-merge'),
        HtmlWebpackPlugin = require('html-webpack-plugin'),
        {CleanWebpackPlugin} = require('clean-webpack-plugin'),
        MiniCssExtractPlugin = require('mini-css-extract-plugin'),
        OpitmizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
        TerserWebpackPlugin = require('terser-webpack-plugin');

const config = {
    mode : 'production',
    output: {
        filename : 'main.[contentHash].js',
        path : path.resolve(__dirname, 'dist')
    }, 
    optimization : {
        minimizer : [new OpitmizeCssAssetsWebpackPlugin(), new TerserWebpackPlugin()]
    },
    module : {
        rules : [
            {
                test : /\.(scss)$/,
                use : [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
        ]
    },
    plugins : [
        new MiniCssExtractPlugin({
            filename : '[name].[contentHash].css'
        }),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template : './src/template.html',
            minify: {
                removeAttributeQuotes : true,
                collapseWhitespace : true,
                removeComments : true
            }
        })
    ]
};
module.exports = merge(common, config);