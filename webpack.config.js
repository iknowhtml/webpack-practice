const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build'),
}

const common = {
  entry: {
    app: PATHS.app
  },
  output:{
    path: PATHS.build,
    filename: '[name].js'
  },
  plugins:[
    new HtmlWebpackPlugin({
    title:'Webpack Practice'
    }),
  ],
}

module.exports = function (env){
  console.log('env', env);
  return common;
}
