const path = require('path')
const { HotModuleReplacementPlugin, DefinePlugin } = require('webpack')
const { merge } = require('webpack-merge')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const DotEnv = require('dotenv-webpack')
const common = require('./webpack.common')

/** @type {import('webpack').Configuration} */
const devConfig = {
  mode: 'development',
  devServer: {
    port: 3000,
    hot: true
  },
  module: {
    rules: [
      {
        use: ['style-loader', 'css-loader', 'sass-loader'],
        test: /\.(css|sass|scss)/
      },
    ]
  },
  plugins: [
    new HotModuleReplacementPlugin(),
    new ReactRefreshWebpackPlugin(),
    new DotEnv({
      path: path.resolve(__dirname, '../development.env')
    })
  ],
  devtool: 'eval-source-map'
}

module.exports = merge(common, devConfig)
