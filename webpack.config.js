const webpack = require('webpack');
const path = require('path');

module.exports = {
    devtool: 'sourcemap',
    entry: './src/web/index.js',
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