const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
    mode: "production",
    entry: "./src/index.ts",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        libraryTarget: "commonjs2",
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"],
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: "ts-loader",
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                    require("tailwindcss"),
                                    require("autoprefixer"),
                                ],
                            },
                        },
                    },
                ],
            },
        ],
    },
    externals: {
        react: "react",
        "react-dom": "react-dom",
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                { from: "src/styles/tailwind.css", to: "styles/tailwind.css" },
            ],
        }),
    ],
};
