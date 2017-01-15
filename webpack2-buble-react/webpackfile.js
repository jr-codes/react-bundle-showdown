module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: __dirname
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['buble-loader'],
        exclude: [/node_modules/]
      }
    ]
  }
}
