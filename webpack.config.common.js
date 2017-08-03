'use strict';

/**
 * Please see webpack config reference for better understanding:
 * https://webpack.github.io/docs/configuration.html
 */
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
     
    metadata: {
        title: 'Rock Star',
        baseUrl: '/'
    },

    entry: {
        'polyfills': './src/polyfills.ts',
        'vendor': './src/vendor.ts',
        'app': './src/main.ts'
    },

    resolve: {
        extensions: ['', '.ts', '.js', '.scss', '.html'],
        modulesDirectories: ['node_modules']
    },

    module: {
        loaders: [
             
            {
                test: /\.ts$/,
                loaders: ['ts-loader', 'angular2-template-loader']
            },
            {test: /\.json$/, loader: 'json-loader'},
            {test: /\.html$/, loader: 'raw-loader'},
            {test: /\.scss$/, loaders: ['raw-loader', 'sass-loader']}
        ]
    },

    plugins: [
        
        new webpack.optimize.OccurenceOrderPlugin(true),
        new HtmlWebpackPlugin({
            title: 'Demo Application',
            template: 'src/index.ejs',
            chunksSortMode: 'dependency',
            inject: false
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: ['vendor', 'polyfills']
        })
    ]
};
