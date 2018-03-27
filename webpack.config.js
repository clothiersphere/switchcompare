module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src/index.js'
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'react-hot-loader!babel-loader'
      },
      { test: /\.(png|jpg|gif)$/, 
      loader: 'file-loader?name=./images/[name].[ext]'
      },
      { test: /\.css$/,
        include: /node_modules/,
        loaders: ['style-loader', 'css-loader'],
      },
      // {
      //   test: /\.js$/,
      //   exclude: /node_modules/,
      //   loader: ['babel-loader', 'eslint-loader']
      // },
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/app',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    proxy: {
      '/api/**': {
        target: 'http://localhost:1234',
        secure: false,
        changeOrigin: true
      }
    },
    contentBase: './public',
    hot: true,
    historyApiFallback: true,
  },
};