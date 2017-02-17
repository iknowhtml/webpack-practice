const webpack = require('webpack');

exports.devServer = function({host, port}){
  return {
    devServer:{
      historyApiFallback: true,
      hotOnly: true,
      stats: 'errors-only',
      host,
      port,
    },
    plugins:[
      new webpack.HotModuleReplacementPlugin(),
    ],
  };
};

exports.lintJavascript = function({include, exclude, options}){
  return{
    modules: {
      rules: [
        {
          test: /\.js$/,
          include,
          exclude,
          enforce: 'pre',
          loader: 'eslint-loader',
          options,
        },
      ],
    },
  };
};
