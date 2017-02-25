import path from 'path';
import webpack from 'webpack';

export default {
  entry: './app/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'build.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader'
      }
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      jquery: 'jquery',
      $: 'jquery',
      jQuery: 'jquery'
    })
  ]
};