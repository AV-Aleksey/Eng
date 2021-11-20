import path from "path";
import { Configuration } from "webpack";

import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import ESLintPlugin from "eslint-webpack-plugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";


const config: Configuration = {
    mode: "production",
    target: ['web', 'es5'],
    entry: "./src/index.tsx",
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "[name].[contenthash].js",
        publicPath: "",
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/i,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/preset-env",
                            "@babel/preset-react",
                            "@babel/preset-typescript",
                        ]
                    }
                }
            },
            {
                test: /\.(css)/i,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                    }
                ]
            }
        ]
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                react: {
                    test: /node_modules\/(react|react-dom)\//,
                    name: 'react',
                    chunks: 'initial',
                    enforce: true,
                }
            }
        }
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
      },
      plugins: [
        new HtmlWebpackPlugin({
          template: "src/index.html",
        }),
        new ForkTsCheckerWebpackPlugin({
          async: false,
        }),
        new ESLintPlugin({
          extensions: ["js", "jsx", "ts", "tsx"],
        }),
        new CleanWebpackPlugin(),
      ],
}

export default config;
