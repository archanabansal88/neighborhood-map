module.exports = {
  entry: './src/app.js',
  output: {
    path: __dirname,
    filename: './build/main.js'
  },
  resolve: {
    extensions: ['.js']
  },
  devServer: {
    inline: true,
    port: 3000,
    historyApiFallback: true
  }
}
