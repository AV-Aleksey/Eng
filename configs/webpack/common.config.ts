import { Configuration, HotModuleReplacementPlugin } from "webpack";

import HtmlWebpackPlugin from "html-webpack-plugin";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import ESLintPlugin from "eslint-webpack-plugin";

import { prodWebpackConfig } from "./prod.config";
import { devWebpackConfig } from "./dev.config";
import merge from "webpack-merge";


const commonWebpackConfig: Configuration = {
    entry: "./src/index.tsx",
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
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js", "css"],
    },
    plugins: [
        new HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({ template: "src/index.html" }),
        new ForkTsCheckerWebpackPlugin({ async: false }),
        new ESLintPlugin({ extensions: ["js", "jsx", "ts", "tsx"] }),
    ],
}

export default (env: any) => {
    if (env.MODE === 'production') {
        return merge(commonWebpackConfig, prodWebpackConfig)
    } else {
        return merge(commonWebpackConfig, devWebpackConfig)
    }
}
