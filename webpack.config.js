const webpack = require('webpack');

module.exports = {
    devtool: 'sourcemap',
    entry: './src/index.js',
    output: {
        filename: './dist/bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: [
                    'babel'
                ]
            }
        ]
    }
};