---Webpack dev server config

const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  stats: 'errors-only',
  proxy: {
    '/api/v1/*': {
      target: 'http://localhost:9070',
      secure: false
    },
    '/login': {
      target: 'http://localhost:9070',
      secure: false
    },
    '/logout': {
      target: 'http://localhost:9070',
      secure: false
    }
  }
}).listen(3000, 'localhost', (err) => {
  if (err) {
    console.log(err); // eslint-disable-line
  }

  console.log('Listening at localhost:3000'); // eslint-disable-line
});



---Webpack other basic config
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  devtool: 'eval-cheap-module-source-map',
  debug: true,
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    'react-hot-loader/patch',
    'babel-polyfill',
    path.join(__dirname, 'src', 'index.jsx')
  ],
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'build'),
    publicPath: '/'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.js.?$/,
        exclude: /node_modules/,
        loaders: ['babel', 'eslint']
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css?sourceMap!postcss')
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style', 'css?sourceMap!postcss!sass')
      },
      {
        test: /\.(ttf|eot|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader?name=fonts/[hash].[ext]'
      },
      {
        test: /\.(png|jpe?g|gif|svg|ico)$/,
        loaders: [
          'file-loader?name=images/[hash].[ext]',
          'image-webpack?bypassOnDebug&optimizationLevel=2&interlaced=false'
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new CopyWebpackPlugin([
      {
        from: path.join(__dirname, 'src', 'i18n'),
        to: './i18n'
      }
    ]),
    new HtmlWebpackPlugin({
      title: 'Rauanheimon sellu',
      template: path.join(__dirname, 'src', 'index.ejs')
    }),
    new ExtractTextPlugin('css/app.css', {
      allChunks: true
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"development"'
    }),
    new webpack.ProvidePlugin({
      jQuery: 'jquery',
      _: 'lodash',
      react: 'react'
    })
  ],
  externals: {
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true
  }
};


---package.jsonin scriptit
 "scripts": {
    "clean-build": "rimraf build",
    "test": "mocha --recursive .setup.js ./src/**/*.test.js",
    "test:watch": "mocha --recursive --watch .setup.js ./src/**/*.test.js",
    "start": "node webpack.dev.server.js",
    "build:dev": "npm run clean-build&&webpack --progress --profile --colors --display-error-details",
    "build:prod": "npm run clean-build&&npm run test&&webpack --progress --profile --colors --display-error-details --config webpack.production.config.js",
    "webpack": "webpack --progress --profile --colors --display-error-details --config webpack.production.config.js",
    "apidoc": "apidoc -i ../src/main/java/fi/leanware/controller -o build/apidoc"
  },
  