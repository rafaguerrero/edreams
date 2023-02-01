var path = require('path')
const webpack = require('webpack')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
    entry: "./src/index.jsx",
    output: {
        path: path.join(__dirname, 'dist', 'assets'),
        filename: "bundle.js",
        sourceMapFilename: "bundle.map"
    },
    devtool: "#source-map",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude:/(node_modules)/,
                use: ['babel-loader']
            },
            {
                test: /\.s[ac]ss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            //TODO: USE SASS LOADER OR SIMILAR
        ]
    }
}