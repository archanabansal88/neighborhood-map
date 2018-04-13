const webpack = require('webpack')
const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  entry: './src/app.js',
  output: {
    path: __dirname,
    filename: './dist/main.js'
  },
  resolve: {
    extensions: ['.js']
  },
  devServer: {
    inline: true,
    port: 3000,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'stage-2']
          }
        }
      },
      {
        test: /\.(png)$/,
        exclude: /node_modules/,
        use: {
          loader: 'url-loader'
        }
      }
    ]
  },
  plugins: isProd ? [
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        screw_ie8: true,
        warnings: false
      },
      comments: false
    }),
    new webpack.optimize.AggressiveMergingPlugin()
  ] : []
}
