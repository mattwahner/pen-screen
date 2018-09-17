const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = [
    {
        entry: { main: './src/client/index.js' },
        output: {
            path: path.resolve(__dirname, 'build/public'),
            filename: 'main.js'
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader"
                    }
                },
                {
                    test: /\.less$/,
                    use: ExtractTextPlugin.extract(
                        {
                            fallback: 'style-loader',
                            use: ['css-loader', 'less-loader']
                        })
                }
            ]
        },
        plugins: [
            new ExtractTextPlugin({
                filename: 'style.css'
            }),
            new HtmlWebpackPlugin({
                inject: false,
                hash: true,
                template: './src/client/index.html',
                filename: 'index.html'
            })
        ]
    }
];