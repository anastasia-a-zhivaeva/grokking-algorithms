const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const destPath = path.join(__dirname, 'dist/src');
module.exports = {
  entry: 'src/app.ts',
  output: {
    libraryTarget: 'commonjs',
    path: destPath,
    filename: 'app.js',
  },
  devtool: 'inline-source-map',
  target: 'node',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        loader: 'ts-loader',
        exclude: [/\.(test|e2e)\.ts$/, /node_modules/],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    plugins: [new TsconfigPathsPlugin({ configFile: path.resolve(__dirname, 'tsconfig.json') })],
  },
};
