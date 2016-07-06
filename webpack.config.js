const autoprefixer = require('autoprefixer')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const webpack = require('webpack')
const path = require('path')

const sassLoaders = [
  'css-loader',
  'postcss-loader',
  'sass-loader?indentedSyntax=sass&includePaths[]=' + path.resolve(__dirname, './src')
]

const config = {
  devtool: 'eval',
  entry: {
    index: './src/Index'
  },
  output: {
    path: path.join(__dirname, './build'),
    publicPath: '/build',
    filename: '[name].js'
  },
  plugins: [
    new ExtractTextPlugin('[name].css'),
    new webpack.optimize.LimitChunkCountPlugin({maxChunks: 15}),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
      output: {
        comments: false,
      },
    })
  ],
  module: {
    loaders: [
      {
        test: /\.jsx|\.js?$/,
        exclude: /node_modules/,
        loader: 'babel',
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.json$/, loader: "json"
      },
      {
        test: /\.sass$/,
        loader: ExtractTextPlugin.extract('style-loader', sassLoaders.join('!'))
      }
    ]
  },
  postcss: [
    autoprefixer({
      browsers: ['last 2 versions']
    })
  ],
  resolve: {
    extensions: ['', '.js', '.jsx', '.sass'],
    modulesDirectories: ['src', 'node_modules']
  }
}

module.exports = config
