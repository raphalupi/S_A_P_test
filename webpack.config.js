const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/client/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  entry: './src/client/client.js',

  output: {
    path: path.resolve('dist'),
    filename: 'index_bundle.js',
    // publicPath: ''
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.jsx$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        loader: 'url-loader',
        options: {
          limit: 10000
        }
      }
    ]
  },

  plugins: [
    HtmlWebpackPluginConfig,
  ],

  devServer: {
    historyApiFallback: true,
    proxy: {
      '/api/palindrome': {
        target: 'http://localhost:8081'
      }
    }
  }
};
