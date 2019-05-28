const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const devConfig = require("./webpack.config.dev");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(
    {
        mode: "development",
        entry: {
            index: [path.resolve(__dirname, "src/index.tsx")]
        },
        output: {
            path: path.resolve(__dirname, "dist"),
            filename: "[name].bundle.js"
        },
        devtool: "source-map",
        devServer: {
            contentBase: "./dist"
        },
        resolve: {
            extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
            alias: {
                "@components": path.join(__dirname, "src", "components"),
                "@services": path.join(__dirname, "src", "services"),
                "@styles": path.join(__dirname, "src", "styles")
            }
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    loader: "awesome-typescript-loader"
                },
                {
                    enforce: "pre",
                    test: /\.js$/,
                    loader: "source-map-loader"
                },
                {
                    test: /\.scss$/,
                    use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
                },
                {
                    test: /\.(svg|png|jpg|gif)$/,
                    use: [
                        {
                            loader: "file-loader",
                            options: {
                                name: "assets/[name].[ext]"
                            }
                        }
                    ]
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, "src", "index.html")
            }),
            new MiniCssExtractPlugin({
                filename: "[name].bundle.css"
            })
        ]
    },
    process.env.NODE_ENV == "devServer" ? devConfig : {}
);
