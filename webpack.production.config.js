const webpack = require('webpack');
const path = require('path');

module.exports = {
  devtool: 'source-map',
  entry: [
  	'bootstrap-loader',
    './public/index'
  ],
  output: {
    path: path.join(__dirname, '/build'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
  	loaders: [
      {
        test: /\.jsx?$/,
        include: path.join(__dirname, 'public'),
        loader: 'babel'
      },
      plugins: [
		    new webpack.optimize.DedupePlugin(),
		    new webpack.optimize.UglifyJsPlugin({
		      minimize: true,
		      compress: {
		        warnings: false
		      }
		    }),
		    new webpack.DefinePlugin({
		      'process.env': {
		        'NODE_ENV': JSON.stringify('production')
		      }
		    })
		  ],
      { test: /(\.css)$/, loaders: ['style', 'css'] },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file' },
      { test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000' },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream' },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml' },
      // Bootstrap 3 jquery requirement
      { test: /bootstrap-sass[\/\\]assets[\/\\]javascripts[\/\\]/, loader: 'imports?jQuery=jquery' }
     ]
  }
}