const webpack = require('webpack');
const webpackMerge = require('webpack-merge'); // used to merge webpack configs
const ngtools = require('@ngtools/webpack');

var commonConfig = {
  devtool: 'source-map',

  entry: {
    'index': './src/index.ts'
  },

  output: {
    path: './dist/',
    library: 'ng-password-helper',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },

  externals: {
    '@angular/core': { root: ['ng', 'core'], commonjs: '@angular/core', commonjs2: '@angular/core', amd: '@angular/core' },
    '@angular/common': { root: ['ng', 'common'], commonjs: '@angular/common', commonjs2: '@angular/common', amd: '@angular/common' },
    '@angular/forms': { root: ['ng', 'forms'], commonjs: '@angular/forms', commonjs2: '@angular/forms', amd: '@angular/forms' },
    'rxjs/Rx': { root: 'Rx', commonjs: 'rxjs/Rx', commonjs2: 'rxjs/Rx', amd: 'rxjs/Rx' }
  },

  resolve: {
    extensions: ['.ts']
  },

  module: {
    loaders: [{
      test: /\.ts$/,
      //use: ['@ngtools/webpack']
      use: ['awesome-typescript-loader']
    }]
  }
};

const uglify = {
  plugins: [
    new webpack.optimize.UglifyJsPlugin({ // https://github.com/angular/angular/issues/10618
      mangle: {
        keep_fnames: true
      }
    })
  ]
};

const aot = {
  plugins: [
    new ngtools.AotPlugin({
      tsConfigPath: './tsconfig-aot.json'
    })
  ]
}

if (process.env.NODE_ENV && process.env.NODE_ENV.indexOf('prod') !== -1) {
  module.exports = webpackMerge(commonConfig, uglify);
} else {
  module.exports = webpackMerge(commonConfig);
}