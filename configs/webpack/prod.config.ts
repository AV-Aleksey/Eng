import path from "path";
import { Configuration } from "webpack";

import { CleanWebpackPlugin } from "clean-webpack-plugin";

const rootDir = path.resolve(__dirname, '..', '..');

export const prodWebpackConfig: Configuration = {
    mode: "production",
    target: ['web', 'es5'],
    output: {
        path: path.resolve(rootDir, "build"),
        filename: "[name].[contenthash].js",
        publicPath: "/",
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
        },
    },
    plugins: [
        new CleanWebpackPlugin(),
    ]
}
