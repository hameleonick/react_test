var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');
var dirname = "src";
var entry = "./js/client.js";
var outputPath = "/src/";
var outputFilename = "client.min.js";
console.log(process.argv[3])
if(process.argv[3]=="--buildtests"){

  dirname = "tests"
  entry = "./CalcSpec.js";
  outputPath = "/tests/";
  outputFilename = "spec.min.js";
}
module.exports = {
  context: path.join(__dirname, dirname),
  devtool: debug ? "inline-sourcemap" : null,
  entry: entry,
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
        }
      }
    ]
  },
  output: {
    path: __dirname + outputPath,
    filename: outputFilename
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
};
