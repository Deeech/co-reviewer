import webpack from 'webpack';

export default {
  target: 'web',

  resolve: {
    modulesDirectories: [
      'web_modules',
      'node_modules',
      'frontend'
    ],
    extensions: ['', '.js', '.jsx', '.scss', '.css']
  },

  plugins: [
    new webpack.DefinePlugin({
      NODE_ENV: process.env.NODE_ENV
    })
  ],

  module: {
    preLoaders: [
      { test: /\.js$/, loader: 'eslint-loader', exclude: /node_modules/ }
    ],

    loaders: [
      // { test: /\.svg$/, loaders: ['babel', 'react-svg'] },
      // { test: /\.(jpg)$/, loader: 'image-webpack-loader' },
      // { test: /\.(jpg|ico)$/, loader: 'file' },
      // { test: /\.(png|woff|woff2|eot|ttf)$/, loader: 'file-loader' },
      { test: /\.scss$/, loaders: ["style-loader", "css-loader", "sass-loader"]},
    ],

    noParse: /\.min\.js/
  }

};
