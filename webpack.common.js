const config = {
    entry : './src/index.js',
    module : {
        rules : [
            {
                test : /\.html$/,
                use : [
                    'html-loader'
                ]
            },
            {
                test : /\.(jpe?g|png|gif|svg)$/,
                use : {
                    loader : 'file-loader',
                    options : {
                        name : '[name].[contentHash].[ext]',
                        outputPath : 'assets'
                    }
                }
            }
        ]
    }
};
module.exports = config;