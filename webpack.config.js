module.exports = {
  mode: 'development',
  entry: {
    a: './src/a',
    b: './src/b',
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name].js'
  }
}