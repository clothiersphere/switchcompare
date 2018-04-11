const path = require('path');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src/index.js',
  ],
  module: {
    loaders: [{
      // test: /\.(jsx)?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      // loaders: ['react-hot-loader/webpack', 'babel-loader'],
    },
    {
      test: /\.(png|jpg|gif)$/,
      loader: 'file-loader?name=./images/[name].[ext]',
    },
    {
      test: /\.css$/,
      include: /node_modules/,
      loaders: ['style-loader', 'css-loader'],
    },
    {
      test: /\.svg$/,
      include: /node_modules/,
      loader: 'svg-url-loader',
    },
      // {
      //   test: /\.js$/,
      //   exclude: /node_modules/,
      //   loader: ['babel-loader', 'eslint-loader']
      // },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  output: {
    path: path.resolve(`${__dirname}/app`),
    publicPath: '/',
    filename: 'bundle.js',
  },
  devServer: {
    proxy: {
      '/api/**': {
        target: 'http://localhost:1234',
        secure: false,
        changeOrigin: true,
      },
    },
    contentBase: './public',
    hot: true,
    historyApiFallback: true,
  },
};
