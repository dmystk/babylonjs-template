const path = require('path')

module.exports = {
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'initial',
        },
      },
    },
  },
  mode: 'development',
  entry: {
    app: './src/main.ts',
  },
  output: {
    path: path.resolve(__dirname, 'dist/scripts'),
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  devtool: 'source-map',
  plugins: [],
  module: {
    rules: [{
      test: /\.tsx?$/,
      loader: 'ts-loader',
      exclude: /node_modules/,
    }],
  },
}
