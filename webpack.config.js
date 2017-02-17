const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const merge = require('webpack-merge');
const parts = require('./webpack.parts');

const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build'),
};

const common = merge([
  {
    entry: {
      app: PATHS.app,
    },
    output:{
      path: PATHS.build,
      filename: '[name].js',
    },
    plugins:[
      new HtmlWebpackPlugin({
        title:'Webpack Practice',
      }),
    ],
  },
]);

function development() {
  return merge([
    common,
    parts.lintJavascript({include: PATHS.app, options: {emitWarning: true}}),
  ]);
}

module.exports = function (env){
  return common;
};
