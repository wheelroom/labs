const path = require('path')

module.exports = {
  context: path.resolve(__dirname),
  entry: './set-vars.ts',
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.ts'],
  },
  output: {
    filename: 'set-vars.js',
    path: path.resolve('./static'),
  },
}
