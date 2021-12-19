import path from "path";
import { Configuration, HotModuleReplacementPlugin } from "webpack";

export const devWebpackConfig: Configuration = {
    mode: "development",
    devtool: "inline-source-map",
    devServer: {
        static: path.join(__dirname, "build"),
        historyApiFallback: true,
        port: 4000,
        hot: true,
    },
    plugins: [
        new HotModuleReplacementPlugin(),
    ],
}
