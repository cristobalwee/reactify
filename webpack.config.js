const path = require('path');
//https://stackoverflow.com/questions/42795946/trying-to-add-sass-to-a-react-application

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './index.html',
  filename: 'index.html',
  inject: 'body'
})

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'index_bundle.js'
  },
  module: {
    loaders: [
      // { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      // { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.scss$/, loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      },
      {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: "babel-loader",
          query:
            {
              presets:['react']
            }
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("styles.css"),
    HtmlWebpackPluginConfig
  ]
}
