import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import {CleanWebpackPlugin} from "clean-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

module.exports = {
    entry: {
        index: './src/index.js'
    },

    module: {
        rules: [
            {
                test: /\.js|\.jsx$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.scss|\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", 'sass-loader']
            },
            {
                test: /\.(woff2?|ttf|otf|eot|svg)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts/'
                        }
                    }
                ]
            }
        ]
    },

    output: {
        path: path.resolve(__dirname, './dist'),
        filename: './js.bundler.index.js'
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'Run application',
            filename: 'index.html',
            template: path.resolve(__dirname, './index.html'),
            chunks: ['index']
        }),
        new MiniCssExtractPlugin({
            filename: 'bundler.style.css'
        }),
        new CleanWebpackPlugin()
    ],

    mode: 'development'
}