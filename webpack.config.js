const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
const DefinePlugin = require('webpack').DefinePlugin;
const ProvidePlugin = webpack.ProvidePlugin;
module.exports = {
    entry: [path.resolve(__dirname, './app/app.js')],
    output: {
        path: path.resolve(__dirname, './server/public'),
        filename: "bundle.js",
    },
    module: {
        // preLoaders: [{
        //     test: /\.js$/,
        //     exclude: /node_modules/,
        //     loader: "jshint-loader"
        // }],
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                presets: ['es2015']
            }
        }, {
            test: /\.png$/,
            loader: "url-loader?mimetype=image/png"
        }, {
            test: /\.pdf$/,
            loader: "url-loader?mimetype=application/pdf"
        }, {
            test: /\.css$/,
            loader: 'style!css'
        }, {
            test: /\.scss$/,
            loader: 'style!css!sass'
        }, {
            test: /\.less$/,
            loader: "style!css!less"
        }, {
            test: /\.(woff|woff2)$/,
            loader: "url-loader?limit=10000&mimetype=application/font-woff"
        }, {
            test: /\.(otf|eot|svg|ttf|woff)$/,
            loader: "file-loader"
        },
         {
            test: /\.eot$/,
            loader: "file-loader"
        }, {
            test: /\.svg$/,
            loader: "file-loader"
        }, {
            test: /\.html$/,
            loader: 'html'
        }]
    },
    sassLoader: {
        includePaths: [path.resolve(__dirname, './scss')]
    },
    plugins: [
        new HtmlWebpackPlugin(),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: 'jquery'
        }),
    ]
};
