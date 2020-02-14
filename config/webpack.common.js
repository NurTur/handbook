const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
//const CopyWebpackPlugin = require("copy-webpack-plugin");

const APP_DIR = path.resolve(__dirname, "../src");

module.exports = env => {
    const { PLATFORM, VERSION } = env;
    return merge([
        {
            entry: ["@babel/polyfill", APP_DIR],
            devtool: PLATFORM === "production" ? 'source-map' : 'inline-source-map',
            module: {
                rules: [
                    {
                        test: /\.(js|jsx)$/,
                        exclude: /node_modules/,
                        use: ["babel-loader"]
                    },
                    {
                        test: /\.less$/,
                        use: [
                            PLATFORM === "production"
                                ? MiniCssExtractPlugin.loader
                                : "style-loader",
                            "css-loader",
                            "less-loader"
                        ]
                    },
                    {
                        test: /\.svg$/,
                        loader: 'svg-inline-loader'
                    }
                ]
            },
            plugins: [
                new HtmlWebpackPlugin({
                    template: "./src/index.html",
                    filename: "./index.html"
                }),
                new webpack.DefinePlugin({
                    "process.env.VERSION": JSON.stringify(env.VERSION),
                    "process.env.PLATFORM": JSON.stringify(env.PLATFORM)
                }),
                //new CopyWebpackPlugin([{ from: "src/static" }]),
                // new ImageminPlugin({
                //     test: /\.jpg$/
                // })
            ]
        }
    ]);
};