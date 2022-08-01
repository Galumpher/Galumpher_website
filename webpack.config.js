const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.export = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, '/dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: false
        })
    ],

    devServer: {
        proxy: {
            '/': 'http://localhost:3000'
        },
        port: 8080
    },

    resolve: {
        extensions: ['.jsx', '.js', '.json', '.css', '.scss'],
    },
    
    module: {
        rules: [
            {
                test: /\.m?(jsx|js)$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.css$/,
                use: 'css-loader',
            },
            {
                test: /\.s[ac]ss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
        ]

    }
};