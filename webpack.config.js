const webpack = require("webpack");
const path = require("path");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

/* eslint-disable no-unused-vars */

const bundleOutputDir = "./dist";
module.exports = (env) => {

    const devMode = !(env && env.prod);
    return [
        {
            stats: { modules: false },
            entry: {
                "react-internalization": ["babel-polyfill", "./react-internalization.js"]
            },
            performance: {
                hints: false
            },
            resolve: { extensions: [".js", ".jsx", ".ts", ".tsx", ".css", ".json"] },
            output: {
                path: path.resolve(__dirname, bundleOutputDir),
                filename: "[name].js"
            },
            module:
                {
                    rules:
                        [
                            {
                                test: /\.(js|jsx)$/,
                                exclude: /node_modules/,
                                use:
                                    {
                                        loader: "babel-loader",
                                        options: {
                                            presets: ["env", "babel-preset-react"]
                                        }
                                    }
                            }
                        ]
                },
            optimization:
                {
                    minimizer:
                        [
                            new UglifyJsPlugin({
                                cache: true,
                                parallel: true,
                                sourceMap: true,
                                uglifyOptions: {
                                    compress: {
                                        /* eslint-disable camelcase */
                                        drop_console: true
                                    }
                                }
                            })
                        ],
                    splitChunks:
                        {
                            chunks: "all",
                            cacheGroups: {
                                default: {
                                    minChunks: 2,
                                    priority: -20,
                                    reuseExistingChunk: true
                                }
                            }
                        }
                },
            plugins:
                [
                    new webpack.SourceMapDevToolPlugin({
                        filename: "[name].js.map",
                        exclude: /node_modules/,
                        moduleFilenameTemplate: path.relative(bundleOutputDir, "[resourcePath]")
                    }),
                    new webpack.HotModuleReplacementPlugin()
                    //, new BundleAnalyzerPlugin()
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