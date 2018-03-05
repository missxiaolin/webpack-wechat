const { resolve } = require('path')
const r = url => resolve(__dirname, url)
const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')

const ExtractTextPlugin = require('extract-text-webpack-plugin')
const extractSass = new ExtractTextPlugin({
    filename: '[name].wxss'
})

module.exports = {
    devtool: false,
    output: {
        path: r('./mina'),
        filename: '[name].js'
    },
    resolve: {
        alias: {
            utils: r('../utils/util')
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/, // 排除不想编译的目录
                options: {
                    presets: [
                        ['env', {
                            modules: false
                        }]
                    ]
                }
            },
            {
                test: /\.sass$/,
                use: extractSass.extract({
                    use: [
                        {loader: 'css-loader'},
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: (loader) => {
                                    require('autoprefixer')({
                                        browsers: [
                                            'last 2 versions'
                                        ]
                                    })
                                }
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                indentedSyntax: true
                            }
                        }
                    ],
                    fallback: 'style-loader'
                })
            },
            {
                test: /\.mina$/,
                loader: 'wechat-mina-loader',
                options: {
                    path: r('../'),
                    dist: './mina'
                }
            }
        ]
    },
    plugins: [
        extractSass,
        new CopyWebpackPlugin([
            {
                from: {
                    glob: "pages/**/*.json",
                },
                to: ''
            },
            {
                from: 'static',
                to: 'static'
            }
        ]),
        new webpack.optimize.ModuleConcatenationPlugin(),
        // 压缩是否开启
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: false
        }),
        new ProgressBarPlugin()
    ]
}