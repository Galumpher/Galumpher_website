const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        })
    ],

    devServer: {
        static: {
            directory: path.resolve(__dirname, 'build')
        },
        proxy: {
            '/': 'http://localhost:3333'
        },
        compress: true,
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
<<<<<<< HEAD
                use: ['style-loader', 'css-loader'],
=======
                use: ['style-loader', 'css-loader']
>>>>>>> dev
            },
            {
                test: /\.s[ac]ss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
              },
        ]
    }
};