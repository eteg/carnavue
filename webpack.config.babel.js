import path from 'path';
import webpack from 'webpack';

export default {
  entry: './app/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'build.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [path.resolve(__dirname, './app')],
        options: {
          formatter: require('eslint-friendly-formatter'), // eslint-disable-line global-require
        },
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
      },
      {
        test: /\.svg/,
        loader: 'svg-url-loader',
      },
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      jquery: 'jquery',
      $: 'jquery',
      jQuery: 'jquery',
    }),
  ],
};
