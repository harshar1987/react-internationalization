const webpack = require("webpack");
const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const CleanWebPackPlugin = require("clean-webpack-plugin");
/* eslint-disable no-unused-vars */

const bundleOutputDir = "./dist";
module.exports = (env) => {

    const devMode = !(env && env.prod);
    return [
        {
            entry: {
                "index": ["./src/index.js"]
            },
            performance: {
                hints: false
            },
            resolve: { extensions: [".js", ".jsx", ".ts", ".tsx", ".css", ".json"] },
            output: {
                path: path.resolve(__dirname, bundleOutputDir),
                filename: "[name].js",
                 libraryTarget: "commonjs2"
            },
            module:
                {
                    rules:
                        [
                            {
                                test: /\.(js|jsx)$/,
                                exclude:/(node_modules|examples|dist)/,
                                use: {
                                    loader: "babel-loader",
                                    options: {
                                        presets: ['env']
                                    }
                                }
                            }
                        ]
                },
            optimization: {
                // We no not want to minimize our code.
                minimize: false
            },
            plugins:
                [
                    new webpack.SourceMapDevToolPlugin({
                        filename: "[name].js.map",
                        exclude: /node_modules/,
                        moduleFilenameTemplate: path.relative(bundleOutputDir, "[resourcePath]")
                    }),
                    new webpack.HotModuleReplacementPlugin(),
                    new CleanWebPackPlugin(["dist"], { root: path.resolve(__dirname) }),
                    new HtmlWebPackPlugin({
                        template: "./src/examples/index.html",
                        title: "React app"
                    }),
                    new CopyWebpackPlugin([
                        {
                            context: "./src/examples/locales",
                            from: "**/*",
                            to: "./locales"
                        }
                    ])
                ],
            devtool: "cheap-module-eval-source-map",
            devServer:
                {
                    contentBase: "./",
                    compress: true,
                    historyApiFallback: true,
                    port: 9000
                }
        }];
};