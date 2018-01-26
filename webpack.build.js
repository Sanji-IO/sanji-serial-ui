const webpack = require('webpack');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const bourbon = require('node-bourbon').includePaths;
const config = require('./webpack.config.js');

config.devtool = 'source-map';
config.entry = {
  'sanji-ui': './component/index.js'
};
config.output.filename = 'sanji-serial-ui.js';
config.output.libraryTarget = 'umd';
config.output.library = 'sjSerial';
config.externals = ['angular', 'sanji-core-ui'];

config.module.rules = [
  {
    test: /\.scss$/,
    loader: ExtractTextPlugin.extract({
      fallback: 'style-loader',
      use: [
        { loader: 'css-loader', options: { importLoaders: 1, minimize: true } },
        'postcss-loader',
        {
          loader: 'sass-loader',
          options: {
            includePaths: bourbon
          }
        }
      ]
    })
  }
].concat(config.module.rules);

config.plugins.push(
  new ExtractTextPlugin('sanji-serial-ui.css'),
  new LodashModuleReplacementPlugin(),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      screw_ie8: true,
      warnings: false,
      dead_code: true
    }
  })
);
module.exports = config;
