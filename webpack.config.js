const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/App.jsx',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /.jsx$/,
        loader: 'babel-loader',
        options: {
          presets: ['env', 'react'],
        },
      },
      {
        test: /.scss$/,
        loader: 'style-loader!css-loader!sass-loader',
      },
    ],
  },
};
