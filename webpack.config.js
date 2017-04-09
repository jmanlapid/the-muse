const path = require('path');
const sourcePath = path.join(__dirname, './src');

module.exports = {
  context: sourcePath,
  entry:'./index.js',
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  },
  output:{
    path: __dirname,
    filename:'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query:{
          presets:['react','es2015']
        }
      },
    ]
  }
}
